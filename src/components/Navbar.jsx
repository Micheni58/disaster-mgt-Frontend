import { NavLink } from "react-router-dom";
function Navbar(){
    return(
        <>
        <div className="flex gap-10 p-4 shadow-2xl">
            <div>
                <NavLink to="/" className="border rounded-4xl p-4 ">
                    Logo
                </NavLink>
            
            </div>
            <div className="font-bold flex gap-5 justify-end  ">
                <NavLink to="/" className="hover:text-green-600">
                    Home
                </NavLink>
                <NavLink to="/about" className="hover:text-green-600">
                    About
                </NavLink>
                <NavLink to="/login" className="hover:text-green-600">
                    Login
                </NavLink>
                <NavLink to="/signup" className="hover:text-green-600">
                    Sign Up
                </NavLink>
            </div>
        </div>
        </>
    )
}
export default Navbar;