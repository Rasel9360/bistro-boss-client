import SectionTitle from "../../../Components/SectionTitle";
import photo from "../../../assets/home/slide1.jpg";

const ChefRec = () => {
    return (
        <div className="w-10/12 mx-auto">
            <SectionTitle
                subHeading="Should Try"
                heading="CHEF RECOMMENDS"
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 mt-10">
                <div className=" rounded-md shadow-md ">
                    <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
                    <div className="flex flex-col justify-between bg-[#F3F3F3] p-6 space-y-4">
                        <div className="space-y-2 text-center">
                            <h2 className="text-3xl font-semibold tracking-wide">Caeser Salad</h2>
                            <p className="">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        </div>
                        <button className="btn border-0 w-1/2 mx-auto border-b-4 btn-outline text-[#BB8506] uppercase bg-[#E8E8E8]">add to cart</button>
                    </div>
                </div>
                <div className=" rounded-md shadow-md ">
                    <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
                    <div className="flex flex-col justify-between bg-[#F3F3F3] p-6 space-y-4">
                        <div className="space-y-2 text-center">
                            <h2 className="text-3xl font-semibold tracking-wide">Caeser Salad</h2>
                            <p className="">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        </div>
                        <button className="btn border-0 w-1/2 mx-auto border-b-4 btn-outline text-[#BB8506] uppercase bg-[#E8E8E8]">add to cart</button>
                    </div>
                </div>
                <div className=" rounded-md shadow-md ">
                    <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
                    <div className="flex flex-col justify-between bg-[#F3F3F3] p-6 space-y-4">
                        <div className="space-y-2 text-center">
                            <h2 className="text-3xl font-semibold tracking-wide">Caeser Salad</h2>
                            <p className="">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        </div>
                        <button className="btn border-0 w-1/2 mx-auto border-b-4 btn-outline text-[#BB8506] uppercase bg-[#E8E8E8]">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRec;