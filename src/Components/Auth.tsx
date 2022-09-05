/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import {
  resetForm, APIRegistration, APISingin,
} from '../modules/authorization';

function Auth(
  {
    active,
    setActive,
  }:
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
          onSubmit={async (event) => {
            event.preventDefault();
            if (isAuthModal) {
              await APISingin();
            } else {
              await APIRegistration();
            }
            setActive(!active);
          }}
        >
          <fieldset className="modal-body">
            <legend className="modal-title">{isAuthModal ? 'Авторизация' : 'Регистрация'}</legend>
            <label className="label-auth" htmlFor="email">
              <span>Email</span>
              <input
                id="email"
                type="text"
                minLength={3}
                required
              />
            </label>
            {
              !isAuthModal && (
                <label className="label-auth" htmlFor="name">
                  <span>Имя</span>
                  <input
                    id="name"
                    type="text"
                    minLength={3}
                    required
                  />
                </label>
              )
            }
            <label className="label-auth" htmlFor="password">
              <span>Пароль</span>
              <input
                id="password"
                type="password"
                minLength={8}
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
                onClick={() => {
                  setAuthModal(!isAuthModal);
                  resetForm();
                }}
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
