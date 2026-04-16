import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 min-h-screen bg-[#0a0a0a]">
       
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skills />
        <Projects />
        <div className="relative z-0">
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
