import { Link } from "react-router-dom";
import useCurrentUserDetails from "../../Hooks/useCurrentUserDetails/useCurrentUserDetails";
import { useState } from "react";

const UserDetails = () => {

    // login status from local storage
    const loginStatus = localStorage.getItem("login-status")

    // hooks
    const { currentUserData } = useCurrentUserDetails();
    const [loggedIn, setLoggedIn] = useState(true);



    return (
        <div className="container mx-auto p-5 flex justify-center items-center flex-col">
            <h2 className="text-4xl text-black font-bold text-center">User Details</h2>

            {/* conditionally show user details or login button */}
            {
                !loginStatus ?
                    <div className="mt-[-30px] h-[100vh] flex flex-col justify-center items-center gap-5">
                        <p className="text-[gray] text-xl font-semibold text-center">Oops! You are not logged in.</p>
                        <Link to={"/login"}><button className="bg-black px-5 py-2 rounded text-white hover:text-black hover:bg-white duration-500 text-[18px] font-medium">Login here</button></Link>
                    </div>
                    :
                    <div className="h-screen flex justify-center items-center">
                        <div className="h-[450px] w-[450px] bg-[#e7e7e7] rounded-lg flex flex-col justify-center items-center gap-3">
                            <h3 className="text-2xl font-semibold text-black capitalize">{currentUserData?.name}</h3>
                            <p className="text-[#424242] font-medium">Email: {currentUserData?.email}</p>
                            <p className="text-[#424242] font-medium">Phone: {currentUserData?.phone}</p>

                            {/* button to manage user */}
                            <div className="flex justify-center items-center gap-4 mt-5">

                                {/* update details button */}
                                <Link to={"/updateDetails"}><button className="bg-black px-5 py-2 rounded text-white hover:text-black hover:bg-white duration-500 font-medium">Update details</button></Link>

                                {/* log out button */}
                                <button onClick={() => {
                                    localStorage.removeItem("login-status")
                                    setLoggedIn(!loggedIn)
                                }}
                                    className="bg-black px-5 py-2 rounded text-white hover:text-black hover:bg-white duration-500 font-medium">
                                    Log out
                                </button>

                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default UserDetails;