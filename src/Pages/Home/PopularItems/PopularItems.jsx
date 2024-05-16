import SectionTitle from "../../../Components/SectionTitle";
import MenuItems from "../../../Components/MenuItems";
import useMenu from "../../../Hooks/useMenu";

const PopularItems = () => {
    const [menu] = useMenu();
    const popular = menu.filter(popular => popular.category === 'popular');

    return (
        <div>
            <SectionTitle
                subHeading={"Popular Items"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 w-10/12 mx-auto ">
                {
                    popular.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <div className="flex justify-center items-center mb-20">
                <button className="btn border-0 border-b-4 btn-outline text-lg mt-10">View Full  Menu</button>
            </div>
        </div>
    );
};

export default PopularItems;