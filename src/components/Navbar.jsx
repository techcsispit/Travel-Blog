import React from 'react';
import {Link}  from 'react-router-dom';

function Navbar() {
    return (
        <div className="w-screen bg-gradient-to-r from-blue-500 to-teal-400 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="p-4 text-3xl font-bold text-white">TravelBlog</h1>
                <ul className="nav-links flex flex-row items-center p-4 gap-8">
                    <li>
                        <Link to="/"><button className="text-white text-lg font-semibold transition duration-300 ease-in-out hover:text-teal-200">Home</button></Link>
                    </li>
                    <li>
                        <Link to="/destination"><button className="text-white text-lg font-semibold transition duration-300 ease-in-out hover:text-teal-200">Destinations</button></Link>
                    </li>
                    <li>
                        <Link to="/about"><button className="text-white text-lg font-semibold transition duration-300 ease-in-out hover:text-teal-200">About</button></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;