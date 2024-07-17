import HeroImage from "../assets/dp.png";

const Hero = () => {
  return (
    <>
      <div
        className=" bg-cover text-white text-center py-16 h-screen flex flex-col items-center justify-center pt-0 "
        id="home"
      >
        <div className="container pt-16 m-0 h-full w-full ">
          <img
            src={HeroImage}
            alt="Kaveesh Yoshitha"
            className="mx-auto mb-8 mt-0  w-60 h-60 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
          />
          <h1 className="text-4xl font-bold">
            I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Kaveesh Yoshitha
            </span>
            , a Front End Developer
          </h1>
          <p className="mt-4 text-lg text-gray-300 ">
            Crafting Digital Experiences: Journeying as a Frontend Developer
            from the Heart of Sri Lanka
          </p>
          <div className="mt-8 space-x-4 flex justify-center ">
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover-scale-105 px-4 py-2 rounded-full">
              <a href="#contact">Contact</a>
            </button>
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover-scale-105 px-4 py-2 rounded-full">
              <a
                href="/Kaveesh-Yoshitha-Professional-CV.pdf"
                download="Kaveesh-Yoshitha-Professional-CV.pdf"
              >
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
