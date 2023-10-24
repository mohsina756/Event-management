import { useLoaderData } from "react-router-dom";
import EventCards from "../Components/EventCards";
import Footer from "../Components/Footer";
import Banner from "./Banner";

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-3 gap-3 mx-5">
            { data.map((item)=> <EventCards key={item.id} eventDetails={item}></EventCards>)}
        </div>
        <Footer></Footer>
        </div>
      
    );
};

export default Home;