import { data } from '../../components/data/data'
import './OurStory.scss'
function OurStory() {

  return (
    <div className='OurStory'>
      <h1>Shop The Latest</h1>

<ul>
{
      data && data.map((item,index)=>{
        <li key={index} className='element' >
   {  
        item.name 
        }
        </li>
      })
    }

</ul>

      </div> 
  )
}

export default OurStory