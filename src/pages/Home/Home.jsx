import React from 'react'
import {  Link, Route, Routes } from 'react-router-dom'
import nav from '../../assents/img/nav.png'
import slider from '../../assents/img/slider.png'
import Blog from '../Blog/Blog'
import OurStory from '../OurStory/OurStory'
import Shop from '../Shop/Shop'
import './Home.scss'
function Home() {
  return (
    <div classNameName='Home'>
      <div classNameName="container">
<div classNameName="gold">
<nav classNameName='shoppe'>
<Link to={'/'}><img src={nav} alt="" /></Link>
</nav>
<nav classNameName='head'>
  <Link to={'/shop'}>shop</Link>
  <Link to={'/blog'}>blog</Link>
  <Link to={'/OurStory'}>Our Story</Link>

  <h1>|</h1>
  <i className="bi bi-search"></i>
  <i className="bi bi-cart"></i>
  <i className="bi bi-person"></i>
 

        </nav>
</div>
<Routes>

  <Route path='/shop' element={<Shop/>}/>
  <Route path='/blog' element={<Blog/>}/>
  <Route path='/OurStory' element={<OurStory/>}/>

</Routes>
<center>
<div id="carouselExampleIndicators" className="carousel slide slider" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
  <img src={slider} className="d-block w-100" alt="" />
    </div>
    <div className="carousel-item">
<img src={slider} className="d-block w-100" alt="" />
    </div>
    <div className="carousel-item">
    <img src={slider} className="d-block w-100" alt="" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</center>
      </div>
    </div>
  )
}

export default Home