const MenuItems = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="flex gap-7 ">
            <img className="w-[100px] rounded-r-full rounded-b-full object-cover object-center" src={image} alt="" />
            <div>
                <h3 className="text-lg">{name}-------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-lg font-bold"> {price}</p>
        </div>
    );
};

export default MenuItems;