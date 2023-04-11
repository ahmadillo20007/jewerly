import React, { useEffect, useState } from 'react'
import './AboutSwipper.scss'
import { API_URL } from '../Lib/Api';
function AboutSwipper() {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch(`${API_URL}`)
            .then((res) => res.json())
            .then((data) => setdata(data))
    }, [])
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
            <div className="about__inner">
                <ul className='about__list'>
                    {
                        data && data.filter((item)=>item.types ==='fashion').map((item,ind)=>(
                        <li className='about__item' key={ind}>
                            <img src={item.img} alt="" />
                        </li>
                        ))
                    }
                </ul>
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