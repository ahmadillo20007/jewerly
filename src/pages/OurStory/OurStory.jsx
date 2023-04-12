import React, { useEffect, useState } from 'react'
import { API_URL } from '../../components/Lib/Api'
import './OurStory.scss'
function OurStory() {
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch(`${API_URL}`)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('data-container');
      data.forEach(item => {
        const element = document.createElement('div');
        element.textContent = item.name;
        element.textContent = item.img;
        element.textContent = item.price;
        container.appendChild(element);
      });
    })
    .catch(error => console.error(error));

  }, [])
  return (
    <div className='/'>
      <h1>Shop The Latest</h1>
{
  // API_URL && API_URL.map((item,index)=>())
}
<div id='data'>

<li id='data-container'>

</li>
</div>
      </div> 
  )
}

export default OurStory