
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <main className="bg-fixed bg-[url('https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center flex-1 ml-0 lg:ml-[300px]">
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
