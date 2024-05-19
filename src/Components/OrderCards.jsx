import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";

const OrderCards = ({ item }) => {
    const { name, recipe, image, price , _id} = item;
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const navigate = useNavigate();
    const location = useLocation();


    const newCart = {
        name,
        recipe,
        image,
        price,
        email: user?.email,
        cartId: _id
    }

    const handleAddToCart = () => {
        if (user && user?.email) {
            // add carts
            axiosSecure.post('/carts', newCart)
            .then(data => {
                console.log(data.data);
                if(data.data.insertedId){
                    toast.success("Food added in cart successful")
                }
                refetch();
            })
        }
        else {
            Swal.fire({
                title: "You are not login",
                text: "Please login before add a food",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
        // console.log(item);
    }

    return (
        <div className=" rounded-md shadow-md relative  group ">
            <div className="overflow-hidden">
                <img src={image} alt="" className="object-cover object-center group-hover:scale-110  w-full rounded-t-md h-72 transition" />
            </div>
            <p className="absolute top-4 bg-slate-900 text-white py-2 px-4 rounded-md right-4">${price}</p>
            <div className="flex flex-col justify-between bg-[#F3F3F3] p-6 space-y-4">
                <div className="space-y-2 text-center">
                    <h2 className="text-2xl font-semibold tracking-wide">{name}</h2>
                    <p className="">{recipe.slice(0, 80)}</p>
                </div>
                <button
                    onClick={() => handleAddToCart(item)}
                    className="btn border-0 w-1/2 mx-auto border-b-4 btn-outline text-[#BB8506] uppercase bg-[#E8E8E8]">add to cart</button>
            </div>
        </div>
    );
};

export default OrderCards;