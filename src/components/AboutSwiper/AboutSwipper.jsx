import React, { useEffect, useState } from 'react'
import './AboutSwipper.scss'
import { API_URL } from '../Lib/Api';
import { Link, useLocation, useParams } from 'react-router-dom';
function AboutSwipper() {
    const location = useLocation()
    const [data, setdata] = useState([])
    const [heart, setHeart] = useState(true)
    const [unique, setUnique] = useState(true)
    const [count, setCount] = useState(1)
    const {slug} = useParams()
    useEffect(() => {
        fetch(`${API_URL}`)
            .then((res) => res.json())
            .then((data) => setdata(data))   
    }, [])

    const minus=()=>{if(count <=0){setCount(0)}else{setCount(count-1)}}
    const plus=()=>{setCount(count+1)}


    const fill = (e)=>{
        console.log(e.target.id);
        if(!e.target.id == imgBanner.id){
            localStorage.setItem('fill', !true)
            setHeart(true)
            console.log(window.localStorage.getItem('fill'));
        }else {
            setHeart(!heart)
            window.localStorage.setItem('fill', JSON.stringify(heart))
            console.log(window.localStorage.getItem('fill'));
        }
     }
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
              
                {
                    data && data.map((item,index)=>(
                       <div className='img_banner' key={index}>
                       {item.id == imgBanner.id ?
                       <>
                       <img  src={imgBanner.img} alt="" />
                        <div  className="banner__info">
                            <h2>{item.name}</h2>
                            <b>$ {item.price.split('$').join('').split(',').join('.')*count},00</b>
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
                            <span className='btn1'>
                            <button onClick={minus} className='banner__btn'>-</button>
                            <button className='banner__btn'>{count}</button>
                            <button onClick={plus} className='banner__btn'>+</button>
                            </span>
                            <button className='banner__cart'>ADD TO CART</button>
                            <ul className='banner__socialMedia'>
                                <li className='socialMedia_item'><i id={item.id} onClick={fill} className={JSON.parse(window.localStorage.getItem('fill'))?"bi bi-heart-fill":"bi bi-heart"}></i></li>
                                <li className='socialMedia_item'></li>
                                <li className='socialMedia_item'><i className="bi bi-envelope"></i></li>
                                <li className='socialMedia_item'><i className="bi bi-facebook"></i></li>
                                <li className='socialMedia_item'><i className="bi bi-instagram"></i></li>
                                <li className='socialMedia_item'><i className="bi bi-twitter"></i></li>
                            </ul>

                        </div>
                        </>:null
                       }

                       </div> 
                    ))
                }   
                  
                
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