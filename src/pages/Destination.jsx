import React from 'react';
import DestCard from '../components/DestCard';
import CountryGrid from '../components/CountryGrid';
import Footer from '../components/Footer';

function Destination() {
    return (
        <>
        <div className="container mx-auto px-4 py-6">
            <h2 className="flex justify-center items-center text-2xl font-serif font-thin ">
                BROWSE BY POPULAR DESTINATIONS
            </h2>
            <DestCard />
            <h2 className="flex justify-center items-center text-2xl font-serif font-thin ">
                BROWSE BY COUNTRIES
            </h2>
            <CountryGrid />
            <Footer />
        </div>
        </>
    );
}

export default Destination;