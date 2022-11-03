import React from "react";
import { Routes, Route } from "react-router-dom";

import "../index.css";
import Header from "./Header";
import Link from "./Link";
import Footer from "./Footer";
import Contact from "../components/Contact";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <Header />
              <Link />
              <Footer />
            </div>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
