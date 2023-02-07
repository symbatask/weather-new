import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {



    return (
      <div className="header">
      <div className='container'>
          <div className='header__wrapper'>
              <div className='header__logo'>
                  <NavLink to="/" className="header__logo-text">
                      The Weather Channel
                  </NavLink>
              </div>
              <div className='header__search'>
                  <input type='text' placeholder='Поиск...'  />
              </div>
          </div>
      </div>
  </div>
      )
  
}

export default Header