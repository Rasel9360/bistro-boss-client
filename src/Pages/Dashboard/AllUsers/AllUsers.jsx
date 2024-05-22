import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { RiAdminFill, RiDeleteBin6Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();



    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleDelete = (id) => {
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

                axiosSecure.delete(`/users/${id}`)
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

    const handleMakeAdmin = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't  to update user roll!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/admin/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Update!",
                                text: "User roll has been updated.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div>
            <SectionTitle subHeading="How many??" heading="MANAGE ALL USERS"></SectionTitle>
            <div className="w-3/4 mx-auto bg-base-100 p-10 rounded-lg mb-10">
                <div className="uppercase">
                    <h2 className=" text-2xl font-bold font-serif">Total Users: {users.length}</h2>
                </div>
                <div className="overflow-x-auto border rounded-t-xl mt-8">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] ">
                            <tr className="uppercase font-semibold text-white">
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Roll</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, i) =>
                                    <tr key={user._id} className="text-lg">
                                        <th>
                                            {i + 1}
                                        </th>
                                        <td>
                                            <p>{user.name}</p>
                                        </td>
                                        <td>
                                            <p>{user.email}</p>
                                        </td>
                                        <td>
                                            {user.role === "admin" ? <div className="flex gap-2 items-center text-lg font-bold"><RiAdminFill /><p>Admin</p></div> :
                                                <button
                                                    onClick={() => handleMakeAdmin(user._id)}
                                                    className="btn bg-[#D1A054] text-white text-lg "><FaUsers />
                                                </button>}
                                        </td>
                                        <th>
                                            <button
                                                onClick={() => handleDelete(user._id)}
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

export default AllUsers;