const Navbar = () => {
  return (
    <>
      <nav className="bg-transparent text-white px-8 md:px-16 lg:px-24 border border-solid border-white">
        <div className="container py-2 flex justify-center md:justify-between items-center">
          <div className="text-2xl font-bold hidden md:inline hover:text-green-400 transform transition-all duration-300">
            Kaveesh
          </div>
          <div className="space-x-6">
            <a
              href="#home"
              className="hover:text-green-400 transform transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-green-400 transform transition-all duration-300"
            >
              About me
            </a>
            <a
              href="#services"
              className="hover:text-green-400 transform transition-all duration-300"
            >
              Services
            </a>
            <a
              href="#projects"
              className="hover:text-green-400 transform transition-all duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-green-400 transform transition-all duration-300"
            >
              Contact
            </a>
          </div>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover-scale-105 px-4 py-2 rounded-full">
            <a href="#contact">Contact me</a>
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
