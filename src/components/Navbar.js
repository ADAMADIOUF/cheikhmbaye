import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import logo from "../assets/logo.png"
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const { t } = useTranslation()

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
         <img src={logo} alt="awa gueye couture" className='logo' />
        </Link>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className='nav-list'>
            <li className='nav-item'>
              <Link to='/' className='nav-link' onClick={toggleMenu}>
                {t('navbar.home')}
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/shop' className='nav-link' onClick={toggleMenu}>
                {t('navbar.shop')}
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link' onClick={toggleMenu}>
                {t('navbar.about')}
              </Link>
            </li>
            <li className='nav-item'>
              <LanguageSwitcher/>
            </li>
          </ul>
        </div>
        <div className='nav-toggle' onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
