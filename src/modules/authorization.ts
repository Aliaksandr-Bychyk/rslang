import { HTTPMethod, URL, UrlPath } from '../enums/enums';

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
  const inputEmail = document.getElementById('email') as HTMLInputElement;
  const inputName = document.getElementById('name') as HTMLInputElement || undefined;
  const inputPassword = document.getElementById('password') as HTMLInputElement;
  return { inputEmail, inputName, inputPassword };
}

async function APIRequest<T, U>(method: string, requestLink: string, body?: T, token?: string) {
  const rawResponse = await fetch(URL.start + requestLink, {
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
  await APIRequest<
  IBodyRequest, IAPIReqistrationResponse
  >(HTTPMethod.post, UrlPath.users, obj);
}

async function APIGetNewToken(userID: string, token: string) {
  await APIRequest<unknown, IAPISigninResponse>(HTTPMethod.get, `${UrlPath.users}/${userID}/tokens`, {}, token);
  console.log('new token');
}

async function APISingin() {
  const { inputEmail, inputPassword } = getEmailAndPassword();
  const obj: IBodyRequest = {
    email: inputEmail.value,
    password: inputPassword.value,
  };

  const { rawResponse, content } = await APIRequest<
  IBodyRequest, IAPISigninResponse
  >(HTTPMethod.post, UrlPath.signin, obj);

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
  resetForm, APIRegistration, APISingin, APIGetNewToken, IAPISigninResponse,
};
