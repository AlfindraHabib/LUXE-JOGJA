import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HotelRecommendations from "../components/HotelRecommendations";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import "../App.css";

function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <div className="container marketing">
                    <HotelRecommendations />
                </div>
                <Feature /> {/* Include the Feature component here */}
                <Footer />
            </main>
        </>
    );
}

export default Home;