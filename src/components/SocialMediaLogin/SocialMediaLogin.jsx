import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialMediaLogin = () => {
    const { loginWithGoogle, loginWithGithub } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const loginSocial = socialMedia => {
        socialMedia()
            .then(result => {
                console.log(result.user);
                navigate(location.state || "")
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