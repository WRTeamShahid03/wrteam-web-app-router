'use client'
import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroSect from './sections/HeroSect';
import AboutUsSect from './sections/AboutUsSect';
import WinnerSect from './sections/WinnerSect';
import Counter from '../Counter';
import SolutionSect from './sections/SolutionSect';
import ServicesSect from './sections/ServicesSect';
import TechnologySect from './sections/TechnologySect';
import WorkChain from '../WorkChain';
import EnvantoProfileSection from '../EnvantoProfileSection';
import Testimonials from '../Testimonials';


const Home = () => {
    
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="homePageWrapper">

            <HeroSect />

            <AboutUsSect />

            <WinnerSect />

            <Counter />

            <SolutionSect />

            <ServicesSect />

            <TechnologySect />

            <WorkChain />

            <EnvantoProfileSection />

            <Testimonials />

        </div>
    )
}

export default Home