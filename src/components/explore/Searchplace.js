import { useLocation } from "react-router-dom";
function Searchplace() {
    const location = useLocation();
    const place = location.state;
    const urlimg='http://172.0.16.125/php/ethoshackphp/SAFAR/php/uploads/';
    return (
        <div className="container mx-auto px-4 py-8 w-screen">
            <h1 className="text-xl text-center text-green-500 mb-4">{place.place_name}</h1>

            <div className="flex flex-row w-full">
                <div className="w-25 ">

                    <div className="flex flex-wrap">
                    <img className='rounded my-4 mx-auto mt-2 bg-white' src={`${urlimg}${place.place_photo[0]}`} alt='/' style={{ height: '200px', width: '250px' }} />

                    <img className='rounded my-4 mx-auto mt-2 bg-white' src={`${urlimg}${place.place_photo[1]}`} alt='/' style={{ height: '200px', width: '250px' }} />
                     <img className='rounded my-4 mx-auto mt-2 bg-white' src={`${urlimg}${place.place_photo[2]}`} alt='/' style={{ height: '200px', width: '250px' }} />
                    
                         
                    </div>

                    <div className="w-75 ">
                        <p className="text-lg font-semibold">Place Description:</p>
                        <p className="text-xl text-gray-700 leading-relaxed mb-8">{place.place_description}</p>
                <div className="flex">
                    <div className="w-1/3"> 
                        <p className="text-lg font-semibold">Place Culture:</p>
                        <p className="text-xl text-gray-700 leading-relaxed mb-8">{place.place_culture}</p>
                        </div>
                        <div className="w-2/3">
                        <p className="text-lg font-semibold">Region Weather:</p>
                        <p className="text-xl text-gray-700 leading-relaxed mb-8">{place.region_weather}</p>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="">

                <p className="text-lg font-semibold">Category Name:</p>
                <p className="text-xl text-blue-500 mb-4">{place.category_name}</p>

                <p className="text-lg font-semibold">Best Time to Visit:</p>
                <p className="text-xl text-blue-500 mb-4">{place.place_besttime}</p>

                <p className="text-lg font-semibold">How to Reach:</p>
                <p className="text-xl text-blue-500 mb-4">{place.place_howtoreach}</p>

        
            </div>

        </div>

    )
} export default Searchplace;