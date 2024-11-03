import React, { useEffect } from 'react';
import Banner from '../sections/Banner';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        // Check if there's a hash in the URL (e.g., #skills) and scroll to that section
        if (location.hash) {
            const sectionId = location.hash.substring(1); // Remove the # from the hash
            scroller.scrollTo(sectionId, {
                duration: 500,
                delay: 0,
                smooth: "easeInOutQuart",
            });
        }
    }, [location.hash]);

    return (
        <div>
            <div id="home">
                <Banner />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="projects">
                <Projects />
            </div>
        </div>
    )
}

export default Home