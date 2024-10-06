import React from 'react';
import MainCard from '../components/MainCard';
import { SearchIcon } from 'lucide-react';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';

function Home() {
    return (
        <div className="w-screen">
           <MainCard />
           <Featured />
           <BlogCard />
           <Footer />
        </div>
    );
}

export default Home;