import React from 'react';
import Hero from './components/Hero';
import About from './components/About'; // Create this component similarly
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About /> {/* Make sure to create this component with your personal information */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;