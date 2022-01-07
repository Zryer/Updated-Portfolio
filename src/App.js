import React from 'react';

import Header from './Components/Header';
import Intro from './Components/Intro';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

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