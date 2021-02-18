import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BurgerMenu from "../BurgerMenu";
// import axios from 'axios'
import { connect } from 'react-redux'
import "./index.scss";
import {
  fetchUser,
  fetchPhoto
} from "../../store/actions/user"

class Header extends Component {
  state = {
    menuOn: false
  };

  menuOnHandler = () => {
    const menuOn = this.state.menuOn;
    this.setState({ menuOn: menuOn ? false : true });
  };

  componentDidMount() {
    this.props.fetchUser()
    this.props.fetchPhoto()
    // try {
    //   this.getUsers('http://jsonplaceholder.typicode.com/users/1', user)
    //   this.getUsers('http://jsonplaceholder.typicode.com/photos/1', photo)
    // } catch(e) {
    //   console.log(e);
    // }
  }

  // getUsers = async (url, name) => {
  //   const res = await axios.get(url)  

  //   const name = [...this.state.name]
  //   if(res.data.length) {
  //     res.data.map(item => {
  //       return name.push(item)
  //     })    
  //   } else {
  //     name.push(res.data)
  //   }
  //   this.setState({ name })
  // }

  // getPhoto = async (url, photo) => {
  //   const res = await axios.get(url)  

  //   if(res.data.length) {
  //     res.data.map(item => {
  //       return photo.push(item)
  //     })    
  //   } else {
  //     photo.push(res.data)
  //   }
  //   this.setState({ photo })
  // }

  render() {
    console.log(this.props);
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
              <li>
                <NavLink to="/user" className="header__nav-text">
                  <div className="avatar">
                    {this.props.user.map((user, index)=> {
                        return (
                          <div key={index + 'r'}>
                            {user.name}
                          </div>
                        )
                    })}
                    {this.props.photo.map((photo, index)=> {
                      return (
                        <div key={index + 'q'}>
                          <img src={photo.thumbnailUrl} alt="avatar"/>
                        </div>
                      )
                    })}
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    photo: state.user.photo
  }
  
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUser: () => dispatch(fetchUser()),
    fetchPhoto: () => dispatch(fetchPhoto())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
