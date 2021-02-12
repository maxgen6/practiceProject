import React from 'react'
import { NavLink } from 'react-router-dom'
import './BurgerMenu.css'

const BurgerMenu = props => {
    
    return (
        <div className="menu">
            <div className="menu__content">
                <ul>
                    <li>
                        <NavLink to="/" exact className="header__nav-text" onClick={props.menuOnHandler.bind(null, this)}>Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to="/create" className="header__nav-text" onClick={props.menuOnHandler.bind(null, this)}>Создать задачу</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tasks" className="header__nav-text" onClick={props.menuOnHandler.bind(null, this)}>Все задачи</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BurgerMenu
