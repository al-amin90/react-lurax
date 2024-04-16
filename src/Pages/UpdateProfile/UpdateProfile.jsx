import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";
import { useEffect } from "react";
import { Result } from "postcss";
import { Flip, toast } from "react-toastify";

const UpdateProfile = () => {
    const { createUser, userUpdate, user, setLoading } = useAuth()

    useEffect(() => {
        document.title = "UpdateProfile - LURAXRE"
    }, [])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { name, imageurl } = data;

        userUpdate(name, imageurl)
            .then(() => {
                setLoading(false)
                console.log("update succefullay");
                toast.success("Profile Update successfully", {
                    theme: "colored",
                    transition: Flip,
                    autoClose: 2000,
                })
            })
    }
    return (
        <div className="hero ">
            <div className="flex items-center justify-center py-20 bg-[#75d5cd46]  w-full">
                <div className="card shrink-0 md:w-1/2 lg:w-2/6  rounded-lg shadow-2xl bg-[#1AB899] border border-[#75d5cd46]">
                    <h1 className='font-bold text-2xl mt-8 text-center text-[#0D1324]'>Update Profile</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body font-montserrat p-6 ">
                        <div className="form-control">
                            <label className="label mb-1">
                                <span className="label-text text-[#0D1324] font-semibold">Your Name</span>
                            </label>
                            <input
                                {...register("name", { required: true })}
                                defaultValue={user?.displayName}
                                type="text" placeholder="Your Name" className="input input-bordered font-bold rounded-md " />
                            {errors.name && <span className="mt-2 text-red-500">This Name field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label mb-1">
                                <span className="label-text text-[#0D1324] font-semibold">Photo URL</span>
                            </label>
                            <input
                                {...register("imageurl")}
                                defaultValue={user.photoURL}
                                type="text" placeholder="Your Photo URL" className="input input-bordered font-bold rounded-md " />
                        </div>
                        <div className="form-control">
                            <label className="label mb-1">
                                <span className="label-text text-[#0D1324] font-semibold">Email</span>
                            </label>
                            <input
                                type="email" disabled defaultValue={user.email} placeholder="email" className="input input-bordered font-bold rounded-md " />
                        </div>
                        <div className="form-control">
                            <label className="label mb-1">
                                <span className="label-text text-[#0D1324] font-semibold">Password</span>
                            </label>
                            <input
                                type="password" disabled defaultValue={"******"} placeholder="Password" className="input input-bordered font-bold rounded-md " />
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn border-none text-white font-semibold text-base bg-[#0D1324]"> Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;