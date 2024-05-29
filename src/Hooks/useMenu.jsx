import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, seLoading] = useState(true);

    useEffect(() => {
        fetch('https://bistro-boss-server-six-kohl.vercel.app/menu')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
                seLoading(false)
            })
    }, [])
    return [menu, loading]
};

export default useMenu;