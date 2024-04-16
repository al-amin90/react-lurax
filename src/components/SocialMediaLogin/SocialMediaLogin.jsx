import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { Flip, toast } from "react-toastify";

const SocialMediaLogin = () => {
    const { loginWithGoogle, loginWithGithub, setLoading } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const loginSocial = socialMedia => {
        socialMedia()
            .then(result => {
                setLoading(false)
                console.log(result.user);
                toast.success("Login successfully", {
                    theme: "colored",
                    transition: Flip,
                    autoClose: 2000,
                })
                navigate(location.state || "")
            })
            .catch(error => {
                setLoading(false)
                console.log(error);
                toast.error(error.message, {
                    autoClose: 2000,
                    theme: "colored",
                    transition: Flip,
                })
            })
    }

    return (
        <div className=" mt-2 mx-6">
            <button onClick={() => loginSocial(loginWithGoogle)} className="btn w-full  border-none text-black text-base bg-white "><FaGoogle /> Google</button>
            <button onClick={() => loginSocial(loginWithGithub)} className="btn w-full mt-3 border-none text-black text-base bg-white"><FaGithub /> GitHub</button>

        </div>
    );
};

export default SocialMediaLogin;