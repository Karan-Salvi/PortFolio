import "./App.css";
import About from "./components/About";
import { ContactUs } from "./components/Contact";
import Footer from "./components/Footer/";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skill";

function App() {
  return (
    <>
      <Header/>
      <Hero />
      <Skills />
      <Projects />
      <About />
      <ContactUs />
      <Footer/>
    </>
  );
}

export default App;
