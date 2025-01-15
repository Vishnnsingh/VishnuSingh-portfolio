// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.module.css";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import { Home, About, Projects, Contact } from './pages';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import PointerParticles from "./components/PointerParticles";

function App() {
  return (

    <>
    <main className=" bg-slat-300/20 h-full w-full  ">
     
     
    <Router>
      <Navbar />
      <PointerParticles />
      <Routes>
        <Route />
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </main>

    </>
  );
}

export default App;