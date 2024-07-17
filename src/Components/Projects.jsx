import CTravel from "../assets/CTravel.jpg";
import PowerGym from "../assets/PowerGym.jpg";
import portfolioSs from "../assets/portfolio-ss.jpg";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    technologies: "React, Tailwind CSS",
    image: portfolioSs,
    github: "https://github.com/KaveeshYoshitha/Portfolio-Website",
  },
  {
    id: 2,
    name: "C Travel",
    technologies: "HTML, CSS, JavaScript",
    image: CTravel,
    github: "https://github.com/KaveeshYoshitha/C-TRAVEL",
  },
  {
    id: 3,
    name: "Power Gym",
    technologies: "HTML, CSS, JavaScript",
    image: PowerGym,
    github: "https://github.com/KaveeshYoshitha/POWER-GYM-PROJECT",
  },
];

const Projects = () => {
  return (
    <div
      className="bg-transparent text-white py-20 bg-no-repeat bg-center bg-cover"
      id="projects"
    >
      <div className="container mx-auto px-8 md:px-16 md:m-0 lg:px-24 lg:m-0 ">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 border border-solid border-white"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:shadow-lg transform transition-transform duration-300 hover:scale-110"
                target="_blank"
              >
                GitHub Link
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
