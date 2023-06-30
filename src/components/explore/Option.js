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
      <div className=' py-[20px] md:grid grid-cols-3 gap-6  py-5   ' id='option'>
       
          {
            place.map((singleplace) => {
              return (
                <div className='w-96 shadow-xl flex flex-col h-[420px] bg-gray-200 rounded my-2 hover:scale-105 duration-500  ' key={singleplace.place_id}>
                  <img className='rounded mx-auto mt-2 bg-white' src={`${urlimg}${singleplace.place_photo[0]}`} alt='/' style={{ height: '200px', width: '250px' }} />
                  <h2 className='text-center text-3xl font-bold py-3'>{singleplace.place_name}</h2>
                  <p className='text-end mr-6'>{singleplace.region_name}.</p>
                  <div className='text-center font-medium '>
                    <p className='py-4 mt-4 mx-4 border-b '>Category:{singleplace.category_name}.</p>
                    <button className='bg-[#439fef] w-[200px] rounded-md font-medium py-2 px-2 my-2 mx-auto ' onClick={()=>nav(singleplace)}>Explore</button>
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
