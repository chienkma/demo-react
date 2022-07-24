import React from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";
import HomePage from "./features/HomePage";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className='app'>
      <div className='header'>
        <Header />
      </div>
      <div className='homepage'>
        <HomePage />
      </div>
      <div className='footer'>
        {" "}
        <Footer />
      </div>
    </div>
  );
}

export default App;
