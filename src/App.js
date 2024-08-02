import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offset = 100;
      setShowButton(scrollPosition > offset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <Router>
      <Navbar />
      <main>
        <AppRouter />
      </main>
      <Footer />
      <div
        className={`fixed hidden lg:flex bottom-4 z-50 right-4 w-14 h-14 rounded-md bg-blue-500 text-white items-center justify-center cursor-pointer ${showButton ? 'visible' : 'invisible'}`}
        onClick={scrollToTop}
      >
        <i className='bx bx-up-arrow-alt text-4xl'></i>
      </div>
    </Router>
  );
}

export default App;