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
    //     const go = (e)=>{
    //         e.preventDefault();
    //         console.log(e.target.name.value);
    // const newUser = {
    //     name: e.target.name.value,
    //     img: e.target.img.value,
    //     price: e.target.price.value,
    //     types: e.target.types.value,
    //     description: e.target.des.value,
    // }
    //         fetch(`${API_URL}`,{
    //             method: 'POST',
    //             headers: {'Content-type':'application/json'},
    //             body:JSON.stringify(newUser)
    //         })
    //         .then((res)=>res.json())
    //         .then((data)=>console.log(data))
    //     }

    return (
        <div className='about'>
            <div className="about__inner container">
                <ul className='about__list'>
                    {
                        data && data
                        .slice(0,4).filter((item)=>item).map((item,ind)=>(
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