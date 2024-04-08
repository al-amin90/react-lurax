import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";
import SocialMediaLogin from "../../components/SocialMediaLogin/SocialMediaLogin";

const Login = () => {
    const { userLogin } = useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;

        userLogin(email, password)
            .then(result => {
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
                    <div className="card shrink-0 w-2/6 rounded-lg shadow-2xl bg-[#0C1022] ">
                        <h1 className='font-bold text-2xl mt-8 text-center text-white'>Log In</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body font-montserrat p-6 pb-2">
                            <div className="form-control">
                                <label className="label mb-1">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email" placeholder="email" className="input input-bordered rounded-md " required />

                            </div>
                            <div className="form-control">
                                <label className="label mb-1">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input
                                    {...register("password", { required: true })}
                                    type="password" placeholder="Password" className="input input-bordered rounded-md " required />

                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn border-none text-white text-base bg-[#3baaff]">Login</button>
                            </div>
                        </form>
                        <div className="divider divider-info w-2/3 mx-auto text-white ">OR</div>
                        {<SocialMediaLogin></SocialMediaLogin>}
                        <div className='text-white px-6 my-6 text-center font-medium text-base'> Don’t have an account? <Link to="/singup" className=" font-normal text-[#3baaff] underline">
                            Register
                        </Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;