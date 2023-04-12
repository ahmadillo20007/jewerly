import { data } from '../../components/data/data'
import './OurStory.scss'
function OurStory() {
  // const [data, setdata] = useState([])
  // useEffect(() => {
  //   fetch(`${API_URL}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     const container = document.getElementById('data-container');
  //     data.forEach(item => {
  //       const element = document.createElement('div');
  //       element.textContent = item.name;
  //       element.textContent = item.img;
  //       element.textContent = item.price;
  //       container.appendChild(element);
  //     });
  //   })
  //   .catch(error => console.error(error));
  

  // }, [])

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