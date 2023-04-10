import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import nav from '../../assents/img/nav.png'
import Blog from '../Blog/Blog'
import Shop from '../Shop/Shop'
function Home() {
  return (
    <div className='Home'>
      <div className="container">
        <nav className='gold'>
<img src={nav} alt="" />
<ul>
<Routes>
  <Route path='/shop' element={<Shop/>}/>
  <Route path='/blog' element={<Blog/>}/>

</Routes>
</ul>
        </nav>
      </div>
    </div>
  )
}

export default Home