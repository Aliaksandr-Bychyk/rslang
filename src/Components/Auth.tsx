import React, { useState } from 'react';
import { login, register } from '../modules/authorization';

function Auth(
  { active, setActive }:
  {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>
  },
) {
  const [isAuthModal, setAuthModal] = useState(true);
  return (
    <div className="modal-auth">
      <div className="modal-dialog modal-dialog-auth">
        <button
          className="close-auth"
          onClick={() => { setActive(!active); }}
          onKeyDown={() => { setActive(!active); }}
          type="button"
        >
          &times;
        </button>
        <form
          id="logInForm"
          onSubmit={(event) => {
            event.preventDefault();
            if (isAuthModal) {
              login();
            } else {
              register();
            }
            setActive(!active);
          }}
        >
          <fieldset className="modal-body">
            <legend className="modal-title">{isAuthModal ? 'Авторизация' : 'Регистрация'}</legend>
            <label className="label-auth" htmlFor="login">
              <span>Логин</span>
              <input
                id="login"
                type="text"
                minLength={3}
                required
              />
            </label>
            <label className="label-auth" htmlFor="password">
              <span>Пароль</span>
              <input
                id="password"
                type="password"
                minLength={5}
                required
              />
            </label>
          </fieldset>
          <div className="modal-footer">
            <div className="footer-buttons">
              <span
                tabIndex={0}
                role="button"
                className="link"
                onClick={() => setAuthModal(!isAuthModal)}
                onKeyDown={() => {}}
              >
                {isAuthModal ? 'Нет аккаунта?' : 'Есть аккаунт?'}
              </span>
              <button
                className="button button-primary button-login"
                type="submit"
              >
                {isAuthModal ? 'Войти' : 'Зарегистрироваться'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
