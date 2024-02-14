
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import RelastoNavbar from "./Components/Common/RelastoNavbar";
import Agent from "./Components/Pages/Agent";
import Blog from "./Components/Pages/Blog";
import Listing from "./Components/Pages/Listing";
import Property from "./Components/Pages/Property";
import Login from "./Components/Pages/Login";


const App = () => {
  return (
    <Router>
      <RelastoNavbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/property" element={<Property />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
