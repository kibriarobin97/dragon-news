import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {

    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        console.log(form)
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl  text-black">
                <h1 className="text-2xl font-bold text-center mb-5">Please Register</h1>
                <form onSubmit={handleRegister} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block text-black">Name</label>
                        <input type="text" name="name" id="name" placeholder="Your Name" required className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-black">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" required className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-black">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" required className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" />
                    </div>
                    <button className="block w-full p-3 text-center font-bold rounded-lg text-gray-900 bg-violet-400">Register</button>
                </form>
                <p className="text-xs text-center py-5 sm:px-6 text-black">Already have an account?
                    <Link to='/login' className="underline text-primary font-medium"> Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;