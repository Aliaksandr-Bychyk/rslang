const APILink = 'https://react-rslang-learnwords.herokuapp.com/';

interface IAPIReqistrationResponse {
  id?: string,
  password?: string,
}
interface IAPISigninResponse {
  message?: string,
  token?: string,
  refreshToken?: string,
  userId?: string
  name?: string,
}
interface IBodyRequest {
  name?: string,
  email: string,
  password: string,
}

function getEmailAndPassword() {
  const inputEmail: HTMLInputElement = document.getElementById('email') as HTMLInputElement;
  const inputName: HTMLInputElement | undefined = document.getElementById('name') as HTMLInputElement || undefined;
  const inputPassword: HTMLInputElement = document.getElementById('password') as HTMLInputElement;
  return { inputEmail, inputName, inputPassword };
}

async function APIRequest<T, U>(method: string, requestLink: string, body?: T, token?: string) {
  const rawResponse = await fetch(APILink + requestLink, {
    method,
    headers: {
      Authorization: token ? `Bearer ${token}` : 'Basic',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...(Object.keys(body).length > 0) && { body: JSON.stringify(body) },
  });
  const content = await rawResponse.json() as U;
  return { rawResponse, content };
}

async function APIRegistration() {
  const { inputEmail, inputName, inputPassword } = getEmailAndPassword();
  const obj: IBodyRequest = {
    name: inputName.value,
    email: inputEmail.value,
    password: inputPassword.value,
  };
  const { rawResponse, content } = await APIRequest<IBodyRequest, IAPIReqistrationResponse>('POST', 'users', obj);
  console.log(content, rawResponse.status);
}

async function APIGetNewToken(userID: string, token: string) {
  const { rawResponse, content } = await APIRequest<unknown, IAPISigninResponse>('GET', `users/${userID}/tokens`, {}, token);
  console.log(content, rawResponse.status);
}

async function APISingin() {
  const { inputEmail, inputPassword } = getEmailAndPassword();
  const obj: IBodyRequest = {
    email: inputEmail.value,
    password: inputPassword.value,
  };
  const { rawResponse, content } = await APIRequest<IBodyRequest, IAPISigninResponse>('POST', 'signin', obj);
  console.log(content, rawResponse.status);
  if (rawResponse.status === 200) {
    window.localStorage.setItem('user', JSON.stringify({
      token: content.refreshToken,
      userID: content.userId,
      name: content.name,
    }));
  }
}

function resetForm() {
  const formElement = document.querySelector('form');
  formElement.reset();
}

export {
  resetForm, APIRegistration, APISingin, APIGetNewToken,
};
