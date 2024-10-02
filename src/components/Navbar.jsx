import React from 'react';
import {Link}  from 'react-router-dom';
import {Earth} from 'lucide-react'

function Navbar() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
            <div className="container mx-auto flex justify-between items-center px-4 py-6">
                <div className="px-[4rem] flex text-3xl items-center font-bold space-x-3">
                <Earth className="h-8 w-8" />
                <span>TravelBlog</span>
                </div>
                <ul className="hidden md:flex items-center space-x-10 px-[4rem]">
                    <li>
                        <Link to="/"><button className="text-xl cursor-pointer font-semibold transition duration-300 ease-in-out hover:text-purple-600">Home</button></Link>
                    </li>
                    <li>
                        <Link to="/destination"><button className=" text-xl cursor-pointer font-semibold transition duration-300 ease-in-out hover:text-purple-600">Destinations</button></Link>
                    </li>
                    <li>
                        <Link to="/about"><button className=" text-xl cursor-pointer font-semibold transition duration-300 ease-in-out hover:text-purple-600">About</button></Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
}

export default Navbar;