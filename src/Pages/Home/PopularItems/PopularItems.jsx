import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import MenuItems from "../../../Components/MenuItems";

const PopularItems = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                // console.log(popularItems);
                setMenu(popularItems)
            })
    }, [])

    return (
        <div>
            <SectionTitle
                subHeading={"Popular Items"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 w-10/12 mx-auto ">
                {
                    menu.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <div className="flex justify-center items-center mb-20">
                <button className="btn border-0 border-b-4 btn-outline text-lg mt-10">View Full  Menu</button>
            </div>
        </div>
    );
};

export default PopularItems;