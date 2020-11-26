import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./style/main.scss";
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import Navbar from './components/Navbar'
import Showcase from "./components/Showcase";
import Portfolio from "./components/Portfolio";
import Competences from "./components/Competences";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {

  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false
    })
    
    Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', arguments);
    });

    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    }
  }, [])

  const scrollToTop = () => scroll.scrollToTop();

  const scrollToBottom = () => scroll.scrollToBottom();
  
  const scrollTo = () =>  {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  const scrollMore = () => scroll.scrollMore(100);
  
  const handleSetActive= (to) => console.log(to);

  return (
    <main className="main__content">
      <Navbar />
      <Showcase />
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="competences">
        <Competences />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </main>
  );
};

export default App;
