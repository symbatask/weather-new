import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'


const Header = ({setCity}) => {
const [val, setVal] = useState("")
const handleChange = (e) => {
    setVal(e.target.value)
}

const handleSend = (e) => {
   if (e.key === "Enter"){
       setCity(val)
   }
}
   


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
                  <input type='text' placeholder='Поиск...' onInput={handleChange}  onKeyPress={handleSend}/>
              </div>
          </div>
      </div>
  </div>
      )
  
}

export default Header