import BackgroundImage from "../assets/BackgroundImage.gif";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Services from "./Services";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Background = () => {
  return (
    <>
      <div
        className=" w-auto sticky top-0 bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className=" w-auto backdrop-blur-md sticky top-0">
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Background;
