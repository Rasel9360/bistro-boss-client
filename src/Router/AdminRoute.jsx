import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isLoading] = useAdmin();
    const location = useLocation();

    if (loading || isLoading) {
        return <p className="text-center text-4xl font-bold">Loading</p>
    }

    if (user || isAdmin) {
        return children;
    }

    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;