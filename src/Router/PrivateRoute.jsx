import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <p className="text-center text-4xl font-bold">Loading</p>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ form: location }} to='/login' replace></Navigate>
};

export default PrivateRoute;