import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { GiWallet } from "react-icons/gi";
import { FaTruck, FaUsers } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend, Tooltip } from 'recharts';
import { useState } from "react";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminHome = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [chartData, setChartData] = useState([]);
    console.log(chartData);
    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payment-stats');
            // console.log(res.data);
            return res.data
        }
    })

    const { data } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            // console.log(res.data);
            setChartData(res.data)
            return res.data
        }
    })

    // customBarChart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // PieChart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return { name: data.category, value: data.revenue }
    })

    return (
        <div>
            <h2 className="text-3xl font-serif m-10  uppercase">
                <span>Hi, Welcome </span>
                {user ? user.displayName : 'Back!'}
            </h2>
            <section className="p-6 my-6  ">
                <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-2  bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white font-serif">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 text-6xl">
                            <GiWallet />
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-5xl font-semibold leading-none">{stats?.totalRevenue}</p>
                            <p className="capitalize text-2xl">Revenue</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-2  bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white font-serif">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 text-6xl">
                            <FaUsers />
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-5xl font-semibold leading-none">{stats?.customers}</p>
                            <p className="capitalize text-2xl">Customers</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-2  bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white font-serif">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 text-6xl">
                            <MdOutlineRestaurantMenu />
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-5xl font-semibold leading-none">{stats?.menuItems}</p>
                            <p className="capitalize text-2xl">Products</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-2  bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] text-white font-serif">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 text-6xl">
                            <FaTruck />
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-5xl font-semibold leading-none">{stats?.orders}</p>
                            <p className="capitalize text-2xl">Orders</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex bg-base-100 m-8 rounded justify-around items-center">
                <div className="w-1/2">
                    <BarChart
                        width={600}
                        height={400}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2  mb-10 ml-20">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={140}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;