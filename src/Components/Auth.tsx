import React from 'react';

function Auth({ active, setActive }:
{ active: boolean, setActive: React.Dispatch<React.SetStateAction<boolean>> }) {
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
        <form id="logInForm">
          <fieldset className="modal-body">
            <legend className="modal-title">Авторизация</legend>
            <label className="label-auth" htmlFor="login">
              <span>Логин</span>
              <input id="login" type="text" />
            </label>
            <label className="label-auth" htmlFor="password">
              <span>Пароль</span>
              <input id="password" type="password" />
            </label>
          </fieldset>
          <div className="modal-footer">
            <div className="footer-buttons">
              <button className="button button-primary button-login" type="submit">Войти</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
