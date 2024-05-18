const OrderCards = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className=" rounded-md shadow-md relative ">
            <img src={image} alt="" className="object-cover object-center hover:scale-110 w-full rounded-t-md h-72 " />
            <p className="absolute top-4 bg-slate-900 text-white py-2 px-4 rounded-md right-4">${price}</p>
            <div className="flex flex-col justify-between bg-[#F3F3F3] p-6 space-y-4">
                <div className="space-y-2 text-center">
                    <h2 className="text-2xl font-semibold tracking-wide">{name}</h2>
                    <p className="">{recipe.slice(0,80)}</p>
                </div>
                <button className="btn border-0 w-1/2 mx-auto border-b-4 btn-outline text-[#BB8506] uppercase bg-[#E8E8E8]">add to cart</button>
            </div>
        </div>
    );
};

export default OrderCards;