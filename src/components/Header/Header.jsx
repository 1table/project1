import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <a href="" className="logo">logo</a>
        <nav className="nav_link">
            <a href="#" className="nav_link-item">Главная</a>
            <a href="#" className="nav_link-item">О нас</a>
            <a href="#" className="nav_link-item">Контакты</a>
        </nav>
      </div>
    </div>
  )
}

export default Header
