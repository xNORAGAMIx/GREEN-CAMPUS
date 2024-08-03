/* eslint-disable react/prop-types */
import FAQ from "../components/Accordian";
import Review from "../components/Review";
import Banner from "../components/Banner";
import Connect from "../components/Connect";
import AutoScrollImages from "../components/AutoScrollImages";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import YouTubeEmbedComponent from "../components/YouTubeEmbedComponent";
import ContactForm from "../components/ContactForm";

import HeroSection from "../components/HeroSection";


const Home = ({ isOpen }) => {
  return (
    <>
      <div className={` ${isOpen ? "blur-sm" : ""}`}>
        <YouTubeEmbedComponent />
        <HeroSection />
        <FAQ />
        <AutoScrollImages />
        <Review isOpen={isOpen} />
        <Banner />
        <Connect />
        <ContactForm />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
