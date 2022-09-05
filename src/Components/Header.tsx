import React, { useState } from 'react';
import Menu from './Menu';
import { IMenuItems } from '../Interfaces/menuInterfaces';
import Auth from './Auth';
import { RoutePath } from '../enums/enums';
import HeaderProfile from './Profile/HeaderProfile';
import HeaderAuthorization from './Profile/HeaderAuthorization';

function Header(): JSX.Element {
  const [menuActive, setMenuActive] = useState(false);
  const [authActive, setAuthActive] = useState(false);
  const menuItems: IMenuItems[] = [
    {
      value: 'Главная',
      id: 0,
      path: RoutePath.main,
    },
    {
      value: 'Учебник',
      id: 1,
      path: RoutePath.tutorial,
    },
    {
      value: 'Словарь',
      id: 2,
      path: RoutePath.dictionary,
    },
    {
      value: 'Мини-игры',
      id: 3,
      path: RoutePath.games,
    },
    {
      value: 'Статиска',
      id: 4,
      path: RoutePath.stats,
    },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <nav className="navigation">
            <button
              type="button"
              tabIndex={0}
              className={menuActive ? 'burger__btn burger_active ' : 'burger__btn'}
              onClick={() => { setMenuActive(!menuActive); }}
            >
              <span />
            </button>
          </nav>
          {/* <HeaderProfile /> */}
          <HeaderAuthorization active={authActive} setActive={setAuthActive} />
        </div>
      </div>
      <Menu active={menuActive} setActive={setMenuActive} header="Меню" items={menuItems} />
      {
        authActive && <Auth active={authActive} setActive={setAuthActive} />
      }
    </header>
  );
}

export default Header;
