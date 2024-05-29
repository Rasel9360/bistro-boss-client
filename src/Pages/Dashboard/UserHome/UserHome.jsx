import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2 className="text-3xl font-serif m-10  uppercase">
                <span>Hi, Welcome </span>
                {user ? user.displayName : 'Back!'}

            </h2>
        </div>
    );
};

export default UserHome;