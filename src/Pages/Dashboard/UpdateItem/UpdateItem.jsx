import { useLoaderData, useNavigate } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateItem = () => {
    const item = useLoaderData();
    // console.log(item);
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const image_key = import.meta.env.VITE_IMAGE_SECRET_KEY;
    const image_secret_api = `https://api.imgbb.com/1/upload?key=${image_key}`

    const handleAddItems = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] }

        // upload image to imageBB

        const res = await axiosPublic.post(image_secret_api, imageFile, {
            headers: {
                'content-Type': 'multipart/form-data'
            }
        })
        console.log(res.data);
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                image: res.data.data?.display_url,
                category: data.category,
                price: parseFloat(data.price)
            }
            const menu = await axiosSecure.put(`/menu/${item._id}`, menuItem)
            console.log(menu.data);
            if (menu.data.modifiedCount > 0) {
                toast.success('Menu item update successfully')
                navigate('/dashboard/manageItems')
            }
        }
    }
    return (
        <div>
            <SectionTitle heading="UPDATE ITEM"></SectionTitle>
            <div className="w-3/4 mx-auto bg-base-100 p-10 rounded-lg mb-10">
                <form onSubmit={handleSubmit(handleAddItems)}>
                    <div>
                        <label className="label font-bold">
                            <p className="text-lg label-text">Recipe name <span className="text-red-600">*</span></p>
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            placeholder="Recipe name"
                            defaultValue={item.name}
                            className="input input-bordered w-full " />
                        {errors.name && <span className="text-red-600">Recipe name is required</span>}
                    </div>
                    <div className="md:flex gap-6 w-full">
                        <div className="w-1/2">
                            <label className="label font-bold">
                                <p className="text-lg label-text">Recipe name <span className="text-red-600">*</span></p>
                            </label>
                            <select
                                defaultValue={item.category}
                                {...register("category", { required: true })}
                                className="select select-bordered w-full text-lg">
                                <option disabled >Category</option>
                                <option>salad</option>
                                <option>pizza</option>
                                <option>soups</option>
                                <option>desserts</option>
                                <option>drinks</option>
                            </select>
                            {errors.category && <span className="text-red-600">Category is required</span>}
                        </div>
                        <div className="w-1/2">
                            <label className="label font-bold">
                                <p className="text-lg label-text">Price<span className="text-red-600">*</span></p>
                            </label>
                            <input
                                type="text"
                                {...register("price", { required: true })}
                                placeholder="Price"
                                defaultValue={item.price}
                                className="input input-bordered w-full " />
                            {errors.price && <span className="text-red-600">Price is required</span>}
                        </div>
                    </div>
                    <div className=" w-full">
                        <label className="label">
                            <span className="text-lg label-text font-bold">Recipe Details</span>
                        </label>
                        <textarea
                            className="textarea textarea-bordered w-full"
                            {...register("recipe", { required: true })}
                            id=""
                            cols="30"
                            rows="5"
                            defaultValue={item.recipe}
                            placeholder="Recipe Details">
                        </textarea>
                        {errors.recipe && <span className="text-red-600">Recipe details is required</span>}
                    </div>
                    <div>
                        <input
                            type="file"
                            {...register("image", { required: true })}
                            className="file-input  w-full max-w-xs" />
                    </div>
                    <div className="flex justify-center">
                        <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white text-lg mt-6 px-6">Update Recipe Details</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;