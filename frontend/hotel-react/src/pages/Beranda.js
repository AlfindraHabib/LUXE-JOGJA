import React from "react";
import NavbarL from "../components/NavbarL";
import Hero from "../components/Hero";
import HotelRecommendations from "../components/HotelRecommendations";
import Feature from "../components/Feature";
import FooterL from "../components/FooterL";
import "../App.css";


function Beranda() {
    return (
        <>
            <NavbarL />
            <main>
                <Hero />
                <div className="container marketing">
                    <HotelRecommendations />
                </div>
                <Feature /> {/* Include the Feature component here */}
                <FooterL />
            </main>
        </>
    );
}

export default Beranda;