import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const menuItems = <>
        <li className=''><Link to='/'>Home</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/blog'>Blog</Link></li>

        {user?.uid ?
            <>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><button onClick={handleLogOut}>Sign out</button></li>
            </>
            :
            <li><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar rounded-b-xl bg-gray-800 text-white flex justify-between  py-4 sm:px-16 px-4">
            <div className="md:navbar-start justify-between">
                <div className="dropdown">
                    <label tabIndex={0} className="btn  md:hidden lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="font-semibold  text-3xl text-lime-500 ">nextDoor</Link>
            </div>
            <div className="navbar-center hidden md:flex lg:flex">
                <ul className="flex items-center gap-8 p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;