import { Link } from "react-router-dom";


const EventCards = ({eventDetails}) => {
    const {name, image_url, price, description, id} = eventDetails || {} 
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className="h-56 w-full" src={image_url} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{price}</p>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <Link to={`details/${id}`} className="btn btn-primary">Details</Link>
    </div>
  </div>
</div>
    );
};

export default EventCards;