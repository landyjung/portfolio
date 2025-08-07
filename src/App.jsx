import { useEffect, useState } from 'react'

import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './pages/Intro';
import Profile from './pages/Profile';
import Site from './pages/Site';
import Contact from './pages/Contact';
import Project from './pages/Project';
import './assets/css/style.scss';
import link from './utils/link';
import lenis from './utils/smooth';

function App() {
    useEffect(()=>{
        link();
        lenis();
    },[])
    return (
        <>
            <Header />
            <Intro />
            <Profile />
            {/* <Site /> */}
            <Project />        
            <Contact />
            <Footer />
        </>
    )
}

export default App
