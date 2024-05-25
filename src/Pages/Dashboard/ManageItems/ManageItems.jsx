import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { RiAdminFill, RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { data: menu = [], refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu')
            return res.data;
        }
    })

    const handleDelete = async (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Menu item has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }


    return (
        <div>
            <SectionTitle subHeading="Hurry Up!" heading="MANAGE ALL ITEMS"></SectionTitle>
            <div className="w-3/4 mx-auto bg-base-100 p-10 rounded-lg mb-10">
                <div className="uppercase">
                    <h2 className=" text-2xl font-bold font-serif">Total Items: {menu.length}</h2>
                </div>
                <div className="overflow-x-auto border rounded-t-xl mt-8">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] ">
                            <tr className="uppercase font-semibold text-white">
                                <th></th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Item Price</th>
                                <th>Item Edit</th>
                                <th>Item Delet</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                menu.map((item, i) =>
                                    <tr key={item._id} className="text-lg">
                                        <th>
                                            {i + 1}
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
                                        <td>
                                            <Link to={`/dashboard/updateItems/${item._id}`}>
                                                <button
                                                    className="btn bg-[#D1A054] text-white text-lg "><FaEdit />
                                                </button>
                                            </Link>
                                        </td>
                                        <th>
                                            <button
                                                onClick={() => handleDelete(item)}
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

export default ManageItems;