import React, { useEffect, useState } from 'react'
import './AboutSwipper.scss'
import { API_URL } from '../Lib/Api';
import { Link, useParams } from 'react-router-dom';
function AboutSwipper() {
    const [data, setdata] = useState([])
    const {slug} = useParams()
    useEffect(() => {
        fetch(`${API_URL}`)
            .then((res) => res.json())
            .then((data) => setdata(data))
            
    }, [])
    const imgBanner = data.find((item)=> item.id == slug)
    return (
        <div className='about'>
            <div className="about__inner container">
                <ul className='about__list'>
                    {
                        data && data
                        .slice(4,8).filter((item)=>item).map((item,ind)=>(
                        <li className='about__item' key={ind}>
                            <Link to={`/about/${item.id}`}><img src={item.img} alt="" /></Link>
                        </li>
                        ))
                    }
                </ul>
                <  >
                {
                    data && data.map((item,index)=>(
                       <div className="img_banner" key={index}>
                       {item.id == imgBanner.id ?
                       <>
                       <img  src={imgBanner.img} alt="" />
                        <div  className="banner__info">
                            <h2>{item.name}</h2>
                            <b>${item.price}</b>
                            <ul  className='banner__star'>
                                <li >
                                    <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                    <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                    <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                    <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                    <i className="bi bi-star-fill"></i>
                                </li>
                                <span>1 customer review</span>
                            </ul>
                            <p>{item.description}</p>
                        </div>
                        
                        </>:null
                       }

                       </div> 
                    ))
                }   
                </>    
                
            </div>
            {/* <form onSubmit={go} className='form' action="#">
            <label htmlFor="">name  <input type="text" name='name' /></label><br />
            <label htmlFor="">img   <input type="text" name='img' /></label><br />
            <label htmlFor="">price <input type="text" name='price' /></label><br />
            <label htmlFor="">types <input type="text" name='types' /></label><br />
            <label htmlFor="">description <input type="text" name='des'/></label>
            <button>post</button>
        </form> */}

        </div>
    )
}

export default AboutSwipper