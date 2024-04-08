import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const SocialMediaLogin = () => {
    const { loginWithGoogle, loginWithGithub } = useAuth()

    const loginSocial = socialMedia => {
        socialMedia()
            .then(result => {
                console.log(result.user);
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