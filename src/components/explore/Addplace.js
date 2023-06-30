import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';

function Addplace() {
    const location = useLocation();
  const [categoryOptions, setCategoryOptions] = useState([]);
  
  useEffect(() => {
    fetch('http://172.0.16.125/php/ethoshackphp/SAFAR/php/display/getcategory.php')
      .then(response => response.json())
      .then(data => {
        setCategoryOptions(data);
      })
      .catch(error => {
        console.error('Error fetching category options:', error);
      });
  }, []);
  
  const renderRegionOptions = () => {
    const regionOptions = [
      { "id": "802", "region_name": "Kathmandu", "region_rating": " 4" },
      { "id": "803", "region_name": "Bhaktapur", "region_rating": " 4" },
      { "id": "804", "region_name": "Lalitpur", "region_rating": " 2" },
      { "id": "805", "region_name": "Birgunj", "region_rating": " 1" },
      { "id": "806", "region_name": "Biratnagar", "region_rating": " 1" },
      { "id": "807", "region_name": "Bhadrapur", "region_rating": " 1" },
      { "id": "808", "region_name": "Tansen", "region_rating": " 5" },
      { "id": "809", "region_name": "Rajbiraj", "region_rating": " 4" },
      { "id": "810", "region_name": "Butwal", "region_rating": " 5" },
      { "id": "811", "region_name": "Dharan", "region_rating": " 5" },
      { "id": "812", "region_name": "Ilam", "region_rating": " 2" },
      { "id": "813", "region_name": "Janakpur", "region_rating": " 5" },
      { "id": "814", "region_name": "Nepalganj", "region_rating": " 2" },
      { "id": "815", "region_name": "Pokhara", "region_rating": " 1" },
      { "id": "816", "region_name": "Siddharthanagar", "region_rating": " 2" },
      { "id": "817", "region_name": "Hetauda", "region_rating": " 2" }
    ];
    
    return regionOptions.map(option => (
      <option key={option.id} value={option.id}>{option.region_name}</option>
    ));
  };

  const renderCategoryOptions = () => {
    return categoryOptions.map(option => (
      <option key={option.id} value={option.id}>{option.category_name}</option>
    ));
  };
  
  return (
    <div className="add-new-place">
      <h2>Add a New Place</h2>
      <form action="http://172.0.16.125/php/ethoshackphp/SAFAR/php/addplace/addplace.php" method="post" enctype="multipart/form-data">
        <label htmlFor="region">Select Region:</label>
        <select name="region_id" id="region">
          <option value="">Select</option>
          {renderRegionOptions()}
        </select>
        <br /><br />
        <input type="text" name="place_name" placeholder="Place Name" />
        <br /><br />
        <textarea name="place_description" placeholder="Place Description"></textarea>
        <br /><br />
        <label htmlFor="category">Select Category:</label>
        <select name="category_id" id="category">
          <option value="">Select</option>
          {renderCategoryOptions()}
        </select>
        <br /><br />
        <input type="text" name="place_culture" placeholder="Place Culture" />
        <br /><br />
        <input type="file" name="place_photo[]" accept="image/*" multiple directory /><br /><br />
        <input type="text" name="place_besttime" placeholder="Best Time to Visit" />
        <br /><br />
        <input type="text" name="place_howtoreach" placeholder="How to Reach" />
        <br /><br />
        <button type="submit" name="addnewplace">Submit</button>
      </form>
    </div>
  );
}

export default Addplace;