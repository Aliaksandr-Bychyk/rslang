import React from 'react';
import {IMenuItems} from "./Articles";

const Menu = ({active, setActive, header, items}: {active: boolean, setActive:  React.Dispatch<React.SetStateAction<boolean>> , header: string, items: IMenuItems[]}) => {
    return (<div className={active ? 'menu menu__active' : 'menu'} onClick={() => setActive(false)}>
            <div className="blur"/>
            <div className="menu__content">
                <div className="menu__header">{header}</div>
                <ul className="navigation__list">
                    {items.map((item, index) => <li className="navigation__item" key={index}>
                        {item.value}
                    </li>)}
                </ul>
            </div>
        </div>
    );
};

export default Menu;
