import React from 'react';
import '../index.css';
import Header from './Header';
import Link from "./Link";
import Footer from "./Footer";

export default  function App() {
  return (
    <div className="App">
    <div className="container">
    <Header/>
   <Link/>
   <Footer/>
   </div>
    </div>
  );
}


