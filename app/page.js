'use client';

import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";




export default function Home() {
  return (
    <>
<Navbar/>
<Header/>
<About/>
<Services/>
<Projects/>
<Contact/>
<Footer/>
    </>
  );
}
