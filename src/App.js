import React from 'react';

import Header from './Components/HeaderComponent/Header';
import Intro from './Components/IntroComponent/Intro';
import About from './Components/AboutComponent/About';
import Skills from './Components/SkillsComponent/Skills';
import Projects from './Components/ProjectsComponent/Projects';
import Footer from './Components/FooterComponent/Footer';

const App = () => {
    return (
        <>
            <Header />
            <Intro />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </>
    )
}

export default App;