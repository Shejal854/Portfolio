import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Project from "./sections/Project";
import Navbar from "./sections/NavBar";
import About from "./sections/About";
import "./index.css";



const App = () => (
  <>
    <Navbar />
    <Hero />
    <Experience />
    <TechStack />
    <Project />
    <About />
    <Contact />
    <Footer />
    
  </>
);

export default App;