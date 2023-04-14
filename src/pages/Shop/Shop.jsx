import React from 'react'
import './Shop.scss'
import { Link, Route, Routes } from 'react-router-dom'
function Shop() {
  return (
    <div className='shop'>
      <div className="shop__inner container">
      <h2 className="shop__title">Shop The Latest</h2>
      <Link to='/about/4'>About</Link>
      </div>
    </div> 
  )
}

export default Shop