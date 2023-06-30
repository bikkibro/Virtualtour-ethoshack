import { useLocation } from "react-router-dom";
import VrApp from "../VrApp";

function FullView() {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="text-center bg-gray-100 p-8">
      <div className="bg-white py-4 mb-4">
        <h1 className="text-2xl font-bold">{data.name}</h1>
      </div>
      <div className="bg-white py-4 mb-4">
        <VrApp videosrc={data.video} />
      </div>
      <div className="flex bg-white mb-4">
        <div className="flex-1 p-4">
          <h4 className="text-lg font-bold mb-2">Description</h4>
          <p>{data.desc}</p>
        </div>
        <div className="flex-1 p-4">
          <h4 className="text-lg font-bold mb-2">Image:</h4>
          <img
            src={data.image}
            alt=""
            className="h-48 w-48 object-cover"
          />
        </div>
      </div>
      <div className="bg-white py-4 mb-4">
        <h4 className="text-lg font-bold">Culture:</h4>
        <p>{data.culture}</p>
      </div>
      <div className="bg-white py-4 mb-4 flex">
        {
            data.places.map((place)=>{
                return(
                    <div className="border m-2 rounded-md">
                        <h4 className="text-lg font-bold">{place.name}</h4>
                        <img src={place.image} alt="/" />
                        <p>{place.description}</p>
                       
                    </div>
                )
            })
        }
      </div>
    </div>
  );
}

export default FullView;
