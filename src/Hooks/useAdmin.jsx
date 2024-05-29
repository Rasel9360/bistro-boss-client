import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const { user, loading } = useAuth();

    const { data: isAdmin, isLoading } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log(res.data);
            return res.data?.isAdmin;
        }
    })
    return [isAdmin, isLoading]
};

export default useAdmin;