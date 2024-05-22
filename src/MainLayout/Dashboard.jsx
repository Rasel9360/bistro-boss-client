import { FaBook, FaCalendar, FaCalendarCheck, FaHome, FaList, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";
import { MdEmail, MdPayments } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const isAdmin = true;
    return (
        <div className="flex">
            <div className="w-72 min-h-screen bg-[#D1A054]">
                {/* Dashboard navbar */}
                <div className="text-center py-12 text-black">
                    <h2 className="text-2xl font-extrabold font-serif">BISTRO BOSS</h2>
                    <p className="uppercase font-bold font-serif tracking-widest">Restaurant</p>
                </div>
                <ul className="menu space-y-3 uppercase text-[17px] font-medium font-serif">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to="/dashboard/adminHome">
                                        <FaHome />
                                        Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addItems">
                                        <FaUtensils />
                                        Add Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageItems">
                                        <FaList />
                                        Manage Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/booking">
                                        <FaBook />
                                        Manage Bookings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/allUsers">
                                        <FaUsers />
                                        All Users
                                    </NavLink>
                                </li>
                            </> :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome />
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaCalendar />
                                        Reservation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/payment">
                                        <MdPayments />
                                        Payment History
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <FaStar />
                                        Add Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/booking">
                                        <FaCalendarCheck />
                                        My Booking
                                    </NavLink>
                                </li>
                            </>
                    }
                </ul>
                <div className="px-4 my-6">
                    <hr className="px-10" />
                </div>
                {/* shared navLink */}
                <ul className="menu space-y-3 uppercase text-[17px] font-medium font-serif">
                    <li>
                        <NavLink to="/">
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">
                            <IoMenuSharp />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaShoppingBag />
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <MdEmail />
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* Dashboard container */}
            <div className="flex-1 bg-[#F6F6F6]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;