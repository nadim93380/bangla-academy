import { NavLink } from "react-router-dom";

const NavBar = () => {

    const link = <>
        <NavLink to='/' className={({ isActive }) =>
            isActive ? "px-3 py-2 border-green-400 border text-green-400 rounded-lg font-bold" : "px-3 py-2 font-bold"
        }>Home</NavLink>
        <NavLink to='/listedbooks' className={({ isActive }) =>
            isActive ? "px-3 py-2 border-green-400 border text-green-400 rounded-lg font-bold" : "px-3 py-2 font-bold"
        }>Listed Books</NavLink>
        <NavLink to='/pagestoread' className={({ isActive }) =>
            isActive ? "px-3 py-2 border-green-400 border text-green-400 rounded-lg font-bold" : "px-3 py-2 font-bold"
        }>Pages To Read</NavLink>
        <NavLink to='/subscription' className={({ isActive }) =>
            isActive ? "px-3 py-2 border-green-400 border text-green-400 rounded-lg font-bold" : "px-3 py-2 font-bold"
        }>Subscription</NavLink>
        <NavLink to='/contact' className={({ isActive }) =>
            isActive ? "px-3 py-2 border-green-400 border text-green-400 rounded-lg font-bold" : "px-3 py-2 font-bold"
        }>Contact Us</NavLink>
    </>
    return (
        <div className="navbar bg-base-100 my-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold">Bangla Academy</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="hidden lg:block">
                    <button className="btn btn-active btn-accent mr-3">Sign Up</button>
                    <button className="btn btn-info">Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;