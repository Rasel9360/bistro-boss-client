import ContactUs from "../../Components/ContactUs";
import Banner from "./Banner/Banner";
import Bistro from "./Bistro/Bistro";
import Category from "./Cagegory/Category";
import ChefRec from "./ChefRec/ChefRec";
import Featured from "./Featured/Featured";
import PopularItems from "./PopularItems/PopularItems";
import Testi from "./Testi/Testi";

const Home = () => {
    return (
        <div>
            <Banner></Banner>      
            <Category></Category> 
            <Bistro></Bistro>    
            <PopularItems></PopularItems>
            <ContactUs></ContactUs>
            <ChefRec></ChefRec>
            <Featured></Featured>
            <Testi></Testi>
        </div>
    );
};

export default Home;