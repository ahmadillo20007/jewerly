import React from 'react'
import {  Link, Outlet, Route, Routes } from 'react-router-dom'
import nav from '../../assents/img/nav.png'
import Slider from '../../components/Slider/Slider'
import Blog from '../Blog/Blog'
import OurStory from '../OurStory/OurStory'
import Shop from '../Shop/Shop'
import './Home.scss'
function Home() {
  return (
    <div className NameName='Home'> 
      <div className NameName="container">
      <nav className ="navbar navbar-expand-lg navbar-light bg-light">
  <div className ="container-fluid">
    <Link className ="navbar-brand" to={'/'}><img src={nav} alt="" /></Link>
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className ="navbar-toggler-icon"></span>
    </button>
    <div className ="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
        <li className ="nav-item">
          <Link className ="nav-link active" aria-current="page" to={'/shop'}>Shop</Link>
        </li>
        <li className ="nav-item">
          <Link className ="nav-link" to={'/blog'}>Blog</Link>
        </li>
        <li className ="nav-item">
          <Link className ="nav-link disabled" to={'/'} tabindex="-1" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
      <form className ="d-flex">
<input className ="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className ="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<Routes>

  
  <Route path='/' element={<OurStory/>}/>
  <Route path='/shop' element={<Shop/>}/>
  <Route path='/blog' element={<Blog/>}/>
</Routes>

<center>
<Slider/>
</center>

      </div>
    </div>
  )
}

export default Home