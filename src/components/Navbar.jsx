import React ,{useState} from 'react';
import {Link}  from 'react-router-dom';
import {Compass , MenuIcon} from 'lucide-react'

function Navbar() {
    const[menuOpen,setMenuOpen] = useState(false);
    const toggleButton = () => {
        setMenuOpen(!menuOpen);
    }

    const navItems =[
        {path: "/", link: "Home"},
        {path: "/destination", link: "Destination"},
        {path: "/about", link: "About"},
        {path:'/faq',link:"FAQ"}
    ]
    
    return (
        <header>
        <div className="container mx-auto flex justify-between items-center px-4 py-6">
        <div className="px-[4rem] flex text-3xl items-center font-bold space-x-3">
        <Compass className="h-8 w-8" />
        <span>TravelBlog</span>
        </div>
        <ul className="nav-links hidden md:flex items-center space-x-10 px-[5rem]">
            {
                navItems.map(({path,link})=><li>
                    <Link to={path} className='text-xl font-semibold transition duration-300 ease-in-out hover:text-purple-600'>{link}</Link>
                    </li>)
            }
        </ul>
        <div className='md:hidden'>
            <button onClick={toggleButton} className='cursor-pointer'>
                {
                    menuOpen ? <MenuIcon className='w-5 h-5'/> : <MenuIcon className='w-5h-5' />
                }
            </button>
        </div>
    </div>
    <div className='md:hidden h-[8rem]'>
        <ul className={`md:hidden text-lg gap-12 block space-y-4 px-4 py-6 mt-16 bg-lavender ${menuOpen ? "fixed top-0 left-0 w-full transition-all ease-out z-10" : "hidden"}`}>
        {
                navItems.map(({path,link})=><li>
                    <Link to={path} className='text-xl font-semibold transition duration-300 ease-in-out hover:text-purple-600'>{link}</Link>
                    </li>)
            }
        </ul>
    </div>
    </header>
    );
}

export default Navbar;