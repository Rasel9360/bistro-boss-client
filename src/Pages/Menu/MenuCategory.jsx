import { Link } from "react-router-dom";
import MenuItems from "../../Components/MenuItems";

const MenuCategory = ({ items, title }) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-10 w-10/12 mx-auto  mt-20">
                {
                    items.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <div className="flex justify-center items-center mb-20">
                <Link to={`/order/${title}`}>
                    <button className="btn border-0 border-b-4 btn-outline text-lg mt-10">ORDER YOUR FAVORITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;