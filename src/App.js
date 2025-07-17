// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home'
import About from "./Components/About";
import Skill from "./Components/Skill";
import Projects from './Components/Projects';
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Extra from "./Components/Extra";
import Footer from "./Components/Footer";
import { Element } from 'react-scroll';


// import { Element } from 'react-scroll';

function App() {
  return (
    <>
      <Header />

      <Element name='Home'>
        <Home />
      </Element>


      <Element name='About'>
        <About />
      </Element>


      <Element name='Skill'>
        <Skill />
      </Element>


      <Element name='Projects'>
        <Projects />
      </Element>


      <Element name='Services'>
        <Services />
      </Element>


      <Element name='Contact'>
        <Contact />
      </Element>


      <Element name='Extra'>
        <Extra />
      </Element>


      <Element name='Footer'>
        <Footer />
      </Element>




    </>


  );
}

export default App;
