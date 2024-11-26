import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [page, setPage] = useState("about")
  const changePage = (page) => setPage(page)


  return (
    <main className="w-full xl:w-4/5 lg:w-5/6 mx-auto flex">
      <Header changePage={changePage} />
      <div className="md:w-full lg:w-4/5 xl:w-5/6 bg-fixed bg-[url('https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center ">
        {page === "about" && <About />}
        {page === "portfolio" && <Portfolio />}
        {page === "skills" && <Skills />}
        {page === "contact" && <Contact />}
      </div>
    </main>
  );
}

export default App;
