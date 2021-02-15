import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BurgerMenu from "../BurgerMenu";
import "./index.css";

class Header extends Component {
  state = {
    menuOn: false,
  };

  menuOnHandler = () => {
    const menuOn = this.state.menuOn;
    this.setState({ menuOn: menuOn ? false : true });
  };

  render() {
    return (
      <header className="header">
        <div className="header__block">
          <div className="header__logo">
            <NavLink to="/" exact className="header__logo-text">
              задачи
            </NavLink>
          </div>

          <div className="burger__menu">
            <div
              className={
                this.state.menuOn ? "close__menu-btn" : "burger__menu-btn"
              }
              onClick={this.menuOnHandler.bind(null, this)}
            >
              <span></span>
            </div>

            <div className="menu__item">
              <BurgerMenu
                menuOnHandler={this.menuOnHandler}
                menuOn={this.state.menuOn}
              />
            </div>
          </div>

          <div className="header__nav">
            <ul>
              <li>
                <NavLink to="/" exact className="header__nav-text">
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink to="/create" className="header__nav-text">
                  Создать задачу
                </NavLink>
              </li>
              <li>
                <NavLink to="/tasks" className="header__nav-text">
                  Все задачи
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
