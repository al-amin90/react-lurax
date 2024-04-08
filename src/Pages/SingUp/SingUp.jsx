import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";
import { Flip, toast } from "react-toastify";

const SingUp = () => {
    const { createUser, userUpdate } = useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { name, imageurl, email, password } = data;

        if (password.length < 6) {
            toast.error("Password must have 6 character", {
                theme: "colored",
                transition: Flip,
                autoClose: 2000,
            })
            return;
        }
        if (!/^(?=.*[A-Z])/.test(password)) {
            toast.error("Must have a UpperCase latter", {
                theme: "colored",
                transition: Flip,
                autoClose: 2000,
            })
            return
        }
        if (!/^(?=.*[a-z])/.test(password)) {
            toast.error("Must have a LowerCase latter", {
                theme: "colored",
                transition: Flip,
                autoClose: 2000,
            })
            return
        }


        createUser(email, password)
            .then(result => {
                userUpdate(name, imageurl)
                toast.success("Account create successfully", {
                    theme: "colored",
                    transition: Flip,
                    autoClose: 2000,
                })
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div>
            <div className="hero ">
                <div className="hero-content py-20 bg-[#75d5cd46] w-full">
                    <div className="card shrink-0 md:w-1/2 lg:w-2/6  rounded-lg shadow-2xl bg-[#0C1022] ">
                        <h1 className='font-bold text-2xl mt-8 text-center text-white'>Register</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body font-montserrat p-6 ">
                            <div className="form-control">
                                <label className="label mb-1">
                                    <span className="label-text text-white">Your Name</span>
                                </label>
                                <input
                                    {...register("name", { required: true })}
                                    type="text" placeholder="Your Name" className="input input-bordered rounded-md " />
                                {errors.name && <span className="mt-2 text-red-500">This Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label mb-1">
                                    <span className="label-text text-white">Photo URL</span>
                                </label>
                                <input
                                    {...register("imageurl")}
                                    type="text" placeholder="Your Photo URL" className="input input-bordered rounded-md " />
                            </div>
                            <div className="form-control">
                                <label className="label mb-1">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email" placeholder="email" className="input input-bordered rounded-md " />
                                {errors.email && <span className="mt-2 text-red-500"> This Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label mb-1">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input
                                    {...register("password", { required: true })}
                                    type="password" placeholder="Password" className="input input-bordered rounded-md " />
                                {errors.password && <span className="mt-2 text-red-500"> This Password field is required</span>}
                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn border-none text-white text-base bg-[#3baaff]"> Register</button>
                            </div>
                        </form>

                        <div className='text-white px-6 mb-6 text-center font-medium text-base'>Already have an account? <Link to="/login" className=" font-normal text-[#3baaff] underline">
                            Login
                        </Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;