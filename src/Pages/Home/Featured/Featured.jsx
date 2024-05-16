import SectionTitle from "../../../Components/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import './Featured.css';
const Featured = () => {
    return (
        <div className="featured-items object-cover bg-fixed object-center text-white py-16 px-16 mb-20">
            <SectionTitle
                subHeading="Check it out"
                heading="Featured Items"
            ></SectionTitle>
            <div className="flex justify-center items-center gap-10 w-10/12 mx-auto">
                <div>
                    <img className="rounded-lg" src={featured} alt="featured image" />
                </div>
                <div>
                    <p>March 20, 2023</p>
                    <p className="text-lg">WHERE CAN I GET SOME?</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                    <button className="btn border-0 border-b-4 btn-outline text-white text-lg border-white">Book Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;