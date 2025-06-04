import React from 'react';
import NavBar from '../components/NavBar.jsx';
import Hero from '../sections/Hero.jsx';
import Showcase from '../sections/Showcase.jsx';
import LogoSection from '../sections/LogoSection.jsx';
import FeatureCards from '../sections/FeatureCards.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import Contact from '../sections/Contact.jsx';
import Footer from '../sections/Footer.jsx';

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <Showcase />
            <LogoSection />
            <FeatureCards />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;