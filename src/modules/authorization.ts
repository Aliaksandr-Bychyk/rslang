interface IUserProfile {
  username: string,
  password: string,
}

function getLoginAndPassword() {
  const inputLogin = (document.getElementById('login') as HTMLInputElement).value;
  const inputPassword = (document.getElementById('password') as HTMLInputElement).value;
  return { inputLogin, inputPassword };
}

function register(): void {
  const { inputLogin, inputPassword } = getLoginAndPassword();
  const userProfile: IUserProfile = {
    username: inputLogin,
    password: inputPassword,
  };
  const userItem = `user-${inputLogin}`;
  if (window.localStorage.getItem(userItem)) {
    throw new Error('User exists');
  } else {
    window.localStorage.setItem(userItem, JSON.stringify(userProfile));
  }
}

function login() {
  const { inputLogin, inputPassword } = getLoginAndPassword();
  const userItem = `user-${inputLogin}`;
  const getUserFromStorage = window.localStorage.getItem(userItem);
  if (getUserFromStorage) {
    const userProfile: IUserProfile = JSON.parse(getUserFromStorage) as IUserProfile;
    if (userProfile.password !== inputPassword) {
      throw new Error('Invalid password');
    }
    console.log(userProfile);
  } else {
    throw new Error('Invalid User');
  }
}

export { register, login };
