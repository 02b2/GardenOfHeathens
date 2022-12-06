import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Subscribe from "./components/Subscribe";
import Join from './components/Join';
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App" >
   
     <Navbar/>
     <Hero />
     <Subscribe />
    <Join />
    <Footer />
    </div>
  );
}

export default App;
