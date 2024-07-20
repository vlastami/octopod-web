// src/App.tsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";

const WithPaddingTop: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="with-padding-top">{children}</div>;
};

const App = () => {
  return (
    <Router>
      <div id="root">
        <AppNavbar />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={
                <WithPaddingTop>
                  <About />
                </WithPaddingTop>
              }
            />
            <Route
              path="/services"
              element={
                <WithPaddingTop>
                  <Services />
                </WithPaddingTop>
              }
            />
            <Route
              path="/contact"
              element={
                <WithPaddingTop>
                  <Contact />
                </WithPaddingTop>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
