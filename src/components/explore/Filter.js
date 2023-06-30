
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const url='http://172.0.16.125/php/ethoshackphp/SAFAR/php/display';
const urlimg='http://172.0.16.125/php/ethoshackphp/SAFAR/php/uploads/';
const Filter = ({data}) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [result ,setResult]=useState(data);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/getcategory.php`);
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;

    setSelectedCategory(selectedValue);
    sendPostRequest(selectedValue);
   const display=document.getElementById('option');
   if(selectedValue){
    display.innerHTML=null;
   }
    
  };

  const sendPostRequest = async (categoryId) => {
    console.log(categoryId);
    
      const response = await axios.get(`${url}/filtercategory.php?filtercategory_id=${categoryId}`);
      console.log(response.data);
      setResult(response.data)
      // Handle the response data here
   
  };
  const navigate = useNavigate();
  const navg=(singleplace)=>{
    navigate("/searchedplace", { state: singleplace });
  }

  return (
    <div className='z-999 flex justify-end' id='filter'>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>{category.category_name}</option>
        ))}
      </select>
      <div className='py-[20px] md:grid grid-cols-3 gap-6  py-5   '>
       {
        
        result.map((singleplace) => {
            return (
              <div className='w-96 shadow-xl flex flex-col h-[420px] bg-gray-200 rounded my-2 hover:scale-105 duration-500  ' key={singleplace.place_id}>
                <img className='rounded mx-auto mt-2 bg-white' src={`${urlimg}/${singleplace.place_photo[0]}`} alt='/' style={{ height: '200px', width: '250px' }} />
                <h2 className='text-center text-3xl font-bold py-3'>{singleplace.place_name}</h2>
                <p className='text-end mr-6'>{singleplace.region_name}.</p>
                <div className='text-center font-medium '>
                  <p className='py-4 mt-4 mx-4 border-b '>Category:{singleplace.category_name}.</p>
                  <button className='bg-[#439fef] w-[200px] rounded-md font-medium py-2 px-2 my-2 mx-auto 'onClick={()=>navg(singleplace)}>Explore</button>
                </div>
              </div>
            )
          })
       }{
      
       }
      </div>
    </div>
  );
};

export default Filter;