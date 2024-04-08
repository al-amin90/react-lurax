import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";

const UpdateProfile = () => {
    const { createUser, userUpdate } = useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { name, imageurl, email, password } = data;

        createUser(email, password)
            .then(result => {
                userUpdate(name, imageurl)
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero ">
            {/* 75d5cd46 */}
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
                                type="text" placeholder="Your Name" className="input input-bordered font-bold rounded-md " />
                            {errors.name && <span className="mt-2 text-red-500">This Name field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label mb-1">
                                <span className="label-text text-[#0D1324] font-semibold">Photo URL</span>
                            </label>
                            <input
                                {...register("imageurl")}
                                type="text" placeholder="Your Photo URL" className="input input-bordered font-bold rounded-md " />
                        </div>
                        <div className="form-control">
                            <label className="label mb-1">
                                <span className="label-text text-[#0D1324] font-semibold">Email</span>
                            </label>
                            <input
                                type="email" disabled defaultValue={"dfdjsdsk"} placeholder="email" className="input input-bordered font-bold rounded-md " />
                        </div>
                        <div className="form-control">
                            <label className="label mb-1">
                                <span className="label-text text-[#0D1324] font-semibold">Password</span>
                            </label>
                            <input
                                type="password" disabled defaultValue={"dfdjk"} placeholder="Password" className="input input-bordered font-bold rounded-md " />
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn border-none text-white font-semibold text-base bg-[#0D1324]"> Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;