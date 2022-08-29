import React from 'react';
import { IMenu } from '../Interfaces/menuInterfaces';

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
              <li className="navigation__item" key={item.id}>{item.value}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Menu;
