import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Filter from './Filter';
import { useNavigate } from "react-router-dom";

const url='http://172.0.16.125/php/ethoshackphp/SAFAR/php/display';
const urlimg='http://172.0.16.125/php/ethoshackphp/SAFAR/php/uploads/';

function Option() {
  const [place, setPlace] = useState([]);
  useEffect(() => {
    fetch(`${url}/getplace.php`)
      .then((responce) => responce.json())
      .then((data) => {
        console.log(data);
        setPlace(data)
      })
  }, [])
  const navigate = useNavigate();
const nav=(singleplace)=>{
  navigate("/searchedplace", { state: singleplace });
}


  return (
    <div className='m-12'>
      
      <Filter data={place}/>
      <div className=' py-[20px] flex flex-row gap-6  py-5 h-[490px] overflow-y-scroll ' id='option'>
       
          {
            place.map((singleplace) => {
              return (
                <div className='w-96 shadow-xl flex flex-col h-[420px] bg-gray-200 rounded my-2 hover:scale-105 duration-500  ' key={singleplace.place_id}>
                  <img className='rounded mx-auto mt-2 bg-white object-fit' src={`${urlimg}${singleplace.place_photo[0]}`} alt='/' style={{ height: '200px', width: '250px' }} />
                  <div className='flex justify-center mt-4 mx-4 '>
                  <h2 className='text-3xl font-semibold text-gray-950'>{singleplace.place_name},</h2>
                  <p className='align-center text-3xl'>{singleplace.region_name}.</p>
                  </div>
                  <div  className='text-center mt-2 '>
                  <p>{singleplace.category_name}</p>
                  </div>
                  <div className='flex justify-around'>
                  <div  className='py-4 mt-2 mx-4 '>
                  <i class="fa-solid fa-heart" style={{color: '#c90d29'}}></i><span>{singleplace.place_like}Like</span>
                  </div>
                  <div  className='py-4 mt-2 mx-4 '>
                  <i class="fa-regular fa-star" style={{color: '#224e9b'}}></i><span>{singleplace.place_rating}Rating</span>
                  </div>
                  
                  </div>
                  <div className='text-center font-medium '>
                   
                    <button className='bg-[#439fef] rounded-md font-medium py-1 px-2 my-2 mx-auto w-24' onClick={()=>nav(singleplace)}>Explore</button>
                  </div>
                </div>
              )
            })
          }
          
        </div>

      </div>
      )
  }

      export default Option;
