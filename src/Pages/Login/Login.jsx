import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { MdHome } from "react-icons/md";
import useCurrentUserDetails from "../../Hooks/useCurrentUserDetails/useCurrentUserDetails";
import { Toaster, toast } from "sonner";


const Login = () => {


    // hooks and custom hooks
    const [showPassword, setShowPassword] = useState(false);
    const loginForm = useRef(null);
    const { currentUserData } = useCurrentUserDetails();
    const navigate = useNavigate();


    // handle user login
    const handleLogIn = e => {
        e.preventDefault();
        // get data from the login form
        const email = e.target.email.value;
        const password = e.target.password.value;

        const userLoginStatus = true;

        if (email === currentUserData?.email && password === currentUserData?.password) {
            localStorage.setItem("login-status", userLoginStatus)
            toast.success("Logged in successfully!")
            navigate("/")
        }
        else {
            toast.error("Please try again!")
        }
    }


    // show-hide password functionality
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    };



    return (
        <div className="container mx-auto p-5 min-h-[100vh] flex flex-col justify-center items-center relative">

            <div className="space-y-14 flex flex-col justify-center items-center w-full font-heading mt-12 md:mt-5">
                <h2 className="text-4xl text-main font-bold text-center ">Login here</h2>

                {/* sign up form */}
                <form onSubmit={handleLogIn} ref={loginForm} className="flex flex-col justify-center items-center w-full md:w-3/5 lg:w-1/3 gap-8 px-10 font-body">


                    {/* email input */}
                    <div className="w-full flex flex-col justify-center items-start gap-4">
                        <label className="font-medium">Your Email <span className='text-[red]'>*</span></label>
                        <input required type="email" name="email" placeholder="Email address" id="email" className="focus:outline-none border-b-[1px] pb-2 border-[lightgray] focus:border-main transition-all duration-500 w-full" />
                    </div>


                    {/* password input */}
                    <div className="w-full">
                        <label className="font-medium">Your password <span className='text-[red]'>*</span></label>
                        <div className="flex relative w-full justify-center items-center mt-3">
                            <input required type={showPassword ? "text" : "password"} name="password" placeholder="Password" id="password" className="focus:outline-none border-b-[1px] pb-2 border-[lightgray] focus:border-main transition-all duration-500 w-full" />
                            <span onClick={handleShowPassword} className="absolute right-2 text-[gray]"> {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />} </span>
                        </div>
                    </div>

                    {/* submit button */}
                    <input type="submit" value="Login" className="bg-black px-4 py-2 rounded text-white font-semibold hover:bg-white hover:text-black duration-500 w-full cursor-pointer" />

                </form>

                <Toaster />


                {/* back to homepage button */}
                <Link to="/" className="text-[gray] absolute top-[-30px] md:top-0 left-5 flex justify-center items-center gap-2 text-gray font-semibold hover:text-black duration-500"><MdHome />Back to Home</Link>
            </div>

            {/* Toggle to register page */}
            <div className="flex justify-center items-center flex-col font-body">
                <div className="mt-5 flex justify-center items-center gap-1">
                    <p className="text-center font-medium">{'Don\'t'} have an account?</p>
                    <Link to="/register" className="font-bold border-b-2 border-[gray] hover:bg-main hover:text-white hover:bg-black hover:border-black px-2 py-1 duration-300">Register</Link>
                </div>
            </div>

        </div>
    );
};

export default Login;