import { Link, useNavigate } from "react-router-dom";
import './register.css';
import img from "../../assets/authentication2 1.png";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import GoogleLogin from "../../Components/SocialMediaLogin/GoogleLogin";


const Register = () => {
    const { createUser, updateUserProfile,logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        console.log('user update');
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                        .then(res => {
                            console.log(res.data)   
                        })

                    })
                    .catch(err => console.log(err))
                toast.success("Sign up successful")
                logOutUser()
                .then(() => {
                    navigate('/login')
                })
                .catch(err => console.log(err))

            })
            .catch(err => {
                console.log(err);
                toast.error(err.message)
            })
        reset()
    }


    return (
        <div>
            <div className="hero min-h-screen login register">
                <div className="hero-content flex-col lg:flex-row gap-20 shadow-2xl rounded-2xl">
                    <div className="w-1/2">
                        <img src={img} alt="" />
                    </div>
                    <div className="card shrink-0  p-2 w-1/2">
                        <form onSubmit={handleSubmit(onSubmit)}
                            className="card-body">
                            <h1 className="text-3xl font-bold text-center">Create an account</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    placeholder="Enter your name"
                                    className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Photo url</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("photo", { required: true })}
                                    placeholder="Enter your name"
                                    className="input input-bordered" />
                                {errors.photo && <span className="text-red-600">Photo url is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    placeholder="Enter your email"
                                    className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 10,
                                        pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                                    }
                                    )}
                                    placeholder="Enter password"
                                    className="input input-bordered" />
                                {errors.password?.type === "required" && <span className="text-red-600">Password is required</span>}
                                {errors.password?.type === "minLength" && <span className="text-red-600">Password must be 6 character</span>}
                                {errors.password?.type === "maxLength" && <span className="text-red-600">Password must be lese then 10 character</span>}
                                {errors.password?.type === "pattern" && <span className="text-red-600">Password must have one uppercase one lowercase, one number and one spacial character</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#DAB883] text-white text-lg">Register</button>
                            </div>
                        </form>
                        <div className="flex items-center pt-4 space-x-1">
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                            <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <GoogleLogin></GoogleLogin>
                            <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                </svg>
                            </button>
                        </div>
                        <p className="text-lg text-center sm:px-6 mb-5 text-[#DAB883] ">Already registered? <Link to='/login'><span className="text-blue-700 font-bold">Go to log in</span></Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;