import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between py-3">
                    <NavLink to="/" className="flex items-center gap-3">
                        <div className="bg-green-600 text-white rounded-full p-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L15 8H9L12 2Z" fill="currentColor" />
                            </svg>
                        </div>
                        <span className="font-semibold text-gray-800">Crisis Manager</span>
                    </NavLink>

                    <div className="hidden md:flex items-center gap-6 font-medium">
                        <NavLink to="/" className={({isActive}) => `text-gray-700 hover:text-green-600 ${isActive? 'text-green-700':''}`}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={({isActive}) => `text-gray-700 hover:text-green-600 ${isActive? 'text-green-700':''}`}>
                            About
                        </NavLink>
                        <NavLink to="/login" className={({isActive}) => `text-gray-700 hover:text-green-600 ${isActive? 'text-green-700':''}`}>
                            Login
                        </NavLink>
                        <NavLink to="/signup" className={({isActive}) => `px-3 py-2 rounded-md ${isActive? 'bg-green-600 text-white' : 'bg-green-600 text-white/95 hover:opacity-95'}`}>
                            Sign Up
                        </NavLink>
                    </div>

                    <div className="md:hidden">
                        <button aria-label="Toggle menu" onClick={() => setOpen(prev => !prev)} className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none">
                            {open ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div className={`md:hidden transition-all ${open ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col gap-2 py-4">
                        <NavLink to="/" onClick={() => setOpen(false)} className={({isActive}) => `px-3 py-2 rounded-md ${isActive? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                            Home
                        </NavLink>
                        <NavLink to="/about" onClick={() => setOpen(false)} className={({isActive}) => `px-3 py-2 rounded-md ${isActive? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                            About
                        </NavLink>
                        <NavLink to="/login" onClick={() => setOpen(false)} className={({isActive}) => `px-3 py-2 rounded-md ${isActive? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                            Login
                        </NavLink>
                        <NavLink to="/signup" onClick={() => setOpen(false)} className={({isActive}) => `px-3 py-2 rounded-md ${isActive? 'bg-green-600 text-white' : 'bg-green-600 text-white/95 hover:opacity-95'}`}>
                            Sign Up
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;