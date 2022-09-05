import React from 'react';
import { IAPISigninResponse } from '../../modules/authorization';

function HeaderProfile(
  {
    setActive,
  }:
  {
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
  },
): JSX.Element {
  return (
    <div className="profile__contaier">
      <button
        className="button profile__btn"
        onClick={() => { }}
        type="button"
        title="Профиль"
      >
        {(JSON.parse(window.localStorage.getItem('user')) as IAPISigninResponse).name}
      </button>
      <button
        className="button logout__btn"
        onClick={() => {
          window.localStorage.removeItem('user');
          setActive(null);
        }}
        type="button"
        title="Выйти"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="14"
          height="14"
          viewBox="0 0 96.943 96.943"
          xmlSpace="preserve"
          fill="#fff"
        >
          <g>
            <g>
              <path d="M61.168,83.92H11.364V13.025H61.17c1.104,0,2-0.896,2-2V3.66c0-1.104-0.896-2-2-2H2c-1.104,0-2,0.896-2,2v89.623
              c0,1.104,0.896,2,2,2h59.168c1.105,0,2-0.896,2-2V85.92C63.168,84.814,62.274,83.92,61.168,83.92z"
              />
              <path d="M96.355,47.058l-26.922-26.92c-0.75-0.751-2.078-0.75-2.828,0l-6.387,6.388c-0.781,0.781-0.781,2.047,0,2.828
              l12.16,12.162H19.737c-1.104,0-2,0.896-2,2v9.912c0,1.104,0.896,2,2,2h52.644L60.221,67.59c-0.781,0.781-0.781,2.047,0,2.828
              l6.387,6.389c0.375,0.375,0.885,0.586,1.414,0.586c0.531,0,1.039-0.211,1.414-0.586l26.922-26.92
              c0.375-0.375,0.586-0.885,0.586-1.414C96.943,47.941,96.73,47.433,96.355,47.058z"
              />
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
}

export default HeaderProfile;
