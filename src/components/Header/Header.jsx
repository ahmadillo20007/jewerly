import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assents/img/nav.png'
function Header() {
  return (
    <header className='header'>
        <nav className="header__inner container">
            <ul className='header__list'>
                <li className='header__item '>
                    <Link to='/'><img src={logo} alt="" /></Link>
                </li>
                <li className='header__item '>
                    <Link to='/shop'>Shop</Link>
                </li>
                <li className='header__item'>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li className='header__item'>
                    <Link>Our Story</Link>
                </li>
                <li className='header__item'>
                    <Link><i className="bi bi-search"></i></Link>
                </li>
                <li className='header__item'>
                    <Link><i className="bi bi-cart3"></i></Link>
                </li>
                <li className='header__item'>
                    <Link><i className="bi bi-person"></i></Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header