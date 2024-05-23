import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const { logOutUser } = useAuth();
    const navigate = useNavigate();
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('interceptors token', token);
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    })

    axiosSecure.interceptors.response.use(function (response) {
        console.log();
        return response
    }, async (error) => {
        const status = error.response.request.status
        if (status === 401 || status === 403) {
            await logOutUser();
            navigate('/login')
        }
        console.log("error status in the interceptors", status);
        return Promise.reject(error)
    })

    return axiosSecure
};

export default useAxiosSecure;