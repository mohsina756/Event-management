import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const EventDetails = () => {
    const {id} = useParams()
    const data =useLoaderData()
    console.log({id})
    console.log({data})
    const [details, setDetails] = useState({})
    useEffect(() =>{
        if(data.length && id){
          const item = data?.find((details)=>details.id == id);
          setDetails(item);
        }
    },[data, id])
    console.log(details);

    return (
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={details.image_url} className="max-w-2xl rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{details.name}</h1>
    <p className="py-6">{details.description}</p>
      <button className="btn btn-primary normal-case">Book Now</button>
    </div>
  </div>
</div>
    );
};

export default EventDetails;