import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Result from "postcss/lib/result";



const Login = () => {

    const { loginUser } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        // login user
        loginUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="w-full max-w-md mx-auto px-8 space-y-3 rounded-xl  text-black">
                <h1 className="text-2xl font-bold text-center mb-5">Please Login</h1>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-black">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" required className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-black">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" required className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" />
                        <div className="flex justify-end text-xs text-blue-500">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center font-semibold rounded-lg text-white bg-[#403F3F]">Login</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    <p className="px-3 text-sm text-black">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button aria-label="Log in with Google" className="p-3 rounded-sm">
                        <FcGoogle className="text-xl" />
                    </button>
                    <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
                        <FaTwitter className="text-black text-xl" />
                    </button>
                    <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                        <FaGithub className="text-black text-xl" />
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 text-black">Do not have an account?
                    <Link to='/register' className="underline text-primary font-medium"> Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;