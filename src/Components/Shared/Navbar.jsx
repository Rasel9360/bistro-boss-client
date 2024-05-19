import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../Hooks/useCart";


const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOur = () => {
        logOutUser()
            .then(() => {
                toast.success('Log out successfully')
            })
            .catch(err => {
                toast.error(err.message)
            })

    }

    const navLinks = <>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/menu'>OUR MENU</NavLink></li>
        <li><NavLink to='/order/salad'>OUR SHOP</NavLink></li>
        <li><NavLink to='/'>
            <div className="flex gap-2 items-center font-bold">
                <FaCartPlus className="text-lg" />
                <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </div>
        </NavLink></li>

        {
            user ? <><button onClick={handleLogOur}>LOGOUT</button></> :
                <li><NavLink to='/login'>LOGIN</NavLink></li>
        }
    </>

    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white md:px-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="text-2xl font-bold">BISTRO BOSS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;