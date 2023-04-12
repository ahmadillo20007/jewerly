import React from 'react'
import {  Link, Outlet, Route, Routes } from 'react-router-dom'
import nav from '../../assents/img/nav.png'
import Slider from '../../components/Slider/Slider'
import Blog from '../Blog/Blog'
import Shop from '../Shop/Shop'
import './Home.scss'
import Home from '../OurStory/OurStory'
import Header from '../../components/Header/Header'
function Menu() {
  return (
    <div className ='Menu'> 
      <div className ="container">
      <Slider/>
      </div>
    </div>
  )
}

export default Menu