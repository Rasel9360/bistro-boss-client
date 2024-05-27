import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../Components/SectionTitle";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((acu, price) => acu + price.price, 0)
    const axiosSecure = useAxiosSecure();

    const removeFromCart = (id) => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your food cart has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <SectionTitle subHeading="My Cart" heading="WANNA ADD MORE?"></SectionTitle>

            <div className="w-3/4 mx-auto bg-base-100 p-10 rounded-lg mb-10">
                <div className="flex justify-between items-center uppercase">
                    <h2 className=" text-2xl font-bold font-serif">Total orders: {cart.length}</h2>
                    <h2 className=" text-2xl font-bold font-serif">Total price: $ {totalPrice}</h2>
                    {
                        cart.length ?
                            <Link to="/dashboard/payment"><button className="btn bg-[#D1A054] text-white">PAY</button></Link> :
                            <button disabled className="btn bg-[#D1A054] text-white">PAY</button>
                    }
                </div>
                <div className="overflow-x-auto border rounded-t-xl mt-8">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] ">
                            <tr className="uppercase font-semibold text-white">
                                <th></th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((item, i) =>
                                    <tr key={item._id} className="text-lg">
                                        <th>
                                            1
                                        </th>
                                        <td>
                                            <div className="">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="cart img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{item.name}</p>
                                        </td>
                                        <td>
                                            <p>$ {item.price}</p>
                                        </td>
                                        <th>
                                            <button
                                                onClick={() => removeFromCart(item._id)}
                                                className="btn bg-[#B91C1C] text-white text-lg "><RiDeleteBin6Line /></button>
                                        </th>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;