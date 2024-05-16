import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Shared/Cover";
import useMenu from "../../Hooks/useMenu";
import image from "../../assets/menu/banner3.jpg";  
import Desserts from "../../assets/menu/dessert-bg.jpeg";  
import pizza from "../../assets/menu/pizza-bg.jpg";  
import salad from "../../assets/menu/salad-bg.jpg";  
import soup from "../../assets/menu/soup-bg.jpg";  
import MenuCategory from "./MenuCategory";
import SectionTitle from "../../Components/SectionTitle";


const Menu = () => {
    const [menu] = useMenu();
    const salads = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const soups = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Menu </title>
            </Helmet>
            <Cover
                title="OUR MENU"
                subHeading="Would you like to try a dish?"
                img={image}
            ></Cover>
            {/* Offered section */}
            <div>
                <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>
                <MenuCategory items={offered}></MenuCategory>
            </div>
            {/* DESSERTS section */}
            <div className="mt-20">
                <Cover title="DESSERTS" subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={Desserts}></Cover>
                <MenuCategory items={dessert.slice(0,6)} title="dessert"></MenuCategory>
            </div>
            {/* PIZZA section */}
            <div className="mt-20">
                <Cover title="PIZZA" subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={pizza}></Cover>
                <MenuCategory items={pizzas.slice(0,6)} title="pizza"></MenuCategory>
            </div>
            {/* SALADS section */}
            <div className="mt-20">
                <Cover title="SALADS" subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={salad}></Cover>
                <MenuCategory items={salads.slice(0,6)} title="salad"></MenuCategory>
            </div>
            {/* SOUPS section */}
            <div className="mt-20">
                <Cover title="SOUPS" subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={soup}></Cover>
                <MenuCategory items={soups.slice(0,6)} title="soup"></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;