import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {

    return (
        <header className="header">
            <div className="header__block">
                <div className="header__logo">
                    <NavLink to="/" exact className="header__logo-text">задачи</NavLink>
                </div>

                <div className="header__nav">
                    <ul>
                        <li>
                            <NavLink to="/" exact className="header__nav-text">Главная</NavLink>
                        </li>
                        <li>
                            <NavLink to="/create" className="header__nav-text">Создать задачу</NavLink>
                        </li>
                        <li>
                            <NavLink to="/tasks" className="header__nav-text">Все задачи</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </header>
    )
}

export default Header
