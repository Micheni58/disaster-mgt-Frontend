function Navbar(){
    return(
        <>
        <div className="flex gap-10 p-4 shadow-2xl   ">
            <div>
                <h1>Logo</h1>
            </div>
            <div className="font-bold flex gap-5  ">
                <a href="#" className="hover:text-green-800">Home</a>
                <a href="#" className="hover:text-green-800">About</a>
                <a href="#" className="hover:text-green-800">Login</a>
                <a href="#" className="hover:text-green-800">Sign Up</a>
            </div>
        </div>
        </>
    )
}
export default Navbar;