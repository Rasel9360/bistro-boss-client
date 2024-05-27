import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [paymentHistory, setPaymentHistory] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/payments/${user?.email}`)
            .then(res => {
                // console.log(res.data);
                setPaymentHistory(res.data)
            })
    }, [axiosSecure, user?.email]);




    return (
        <div>
            <SectionTitle subHeading="At a Glance!" heading="PAYMENT HISTORY"></SectionTitle>
            <div className="w-3/4 mx-auto bg-base-100 p-10 rounded-lg mb-10">
                <div className=" uppercase">
                    <h2 className=" text-2xl font-bold font-serif">Total Payments: {paymentHistory.length}</h2>
                </div>
                <div className="overflow-x-auto border rounded-t-xl mt-8">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] ">
                            <tr className="uppercase font-semibold text-white text-[16px]">
                                <th></th>
                                <th>Email</th>
                                <th>Transaction Id</th>
                                <th>Price</th>
                                <th>Payment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                paymentHistory.map((item, i) =>
                                    <tr key={item._id} className="text-lg">
                                        <th>
                                            {i + 1}
                                        </th>
                                        <td>
                                            <p>{item.email}</p>
                                        </td>
                                        <td>
                                            <p>{item.transactionId}</p>
                                        </td>
                                        <td>
                                            <p>$ {item.price}</p>
                                        </td>
                                        <th>
                                            {new Date(item.date).toLocaleDateString()}
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

export default PaymentHistory;