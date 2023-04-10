import React from 'react'
import {  Link, Outlet, Route, Routes } from 'react-router-dom'
import nav from '../../assents/img/nav.png'
import slider from '../../assents/img/slider.png'
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
          <a className ="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
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

  
  <Route path='/shop' element={<Shop/>}/>
  <Route path='/blog' element={<Blog/>}/>
  <Route path='/OurStory' element={<OurStory/>}/>
</Routes>

<center>
<div id="carouselExampleIndicators" className Name="carousel slide slider" data-bs-ride="carousel">
  <div className Name="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className Name="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className Name="carousel-inner">
    <div className Name="carousel-item active">
  <img src={slider} className Name="d-block w-100" alt="" />
    </div>
    <div className Name="carousel-item">
<img src={slider} className Name="d-block w-100" alt="" />
    </div>
    <div className Name="carousel-item">
    <img src={slider} className Name="d-block w-100" alt="" />
    </div>
  </div>
  <button className Name="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className Name="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className Name="visually-hidden">Previous</span>
  </button>
  <button className Name="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className Name="carousel-control-next-icon" aria-hidden="true"></span>
    <span className Name="visually-hidden">Next</span>
  </button>
</div>
</center>
      </div>
    </div>
  )
}

export default Home