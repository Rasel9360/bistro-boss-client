import { FaHome } from 'react-icons/fa';
import errorElement from '../../../public/error.gif'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className=''>
            <img className='w-[50%] mx-auto flex' src={errorElement} alt="" />
            <div className='flex justify-center items-center'>
                <Link to='/'>
                    <button className='btn bg-[#B58130] hover:bg-[#835D23] text-white text-lg'>Back To Home <FaHome></FaHome></button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;