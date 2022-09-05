import React from 'react';
import { NavLink } from 'react-router-dom';
import { IMenu } from '../Interfaces/menuInterfaces';
import { setBook } from '../modules/getLocal';

function Menu({
  active, setActive, header, items,
}: IMenu) {
  return (
    <div
      role="button"
      tabIndex={0}
      className={active ? 'menu menu__active' : 'menu'}
      onClick={() => setActive(false)}
      onKeyDown={() => setActive(false)}
    >
      <div className="blur" />
      <div className="menu__content">
        <div className="menu__header">{header}</div>
        <ul className="navigation__list">
          {
            items.map((item) => (
              <li className="navigation__item" key={item.id}>
                <NavLink
                  to={item.path}
                  className="navigation__item"
                  onClick={() => setBook('false', item.path)}
                >
                  {item.value}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Menu;
