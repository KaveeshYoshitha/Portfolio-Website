const Services = () => {
  const services = [
    {
      id: 1,
      title: "Front End Development",
      description:
        "I can create beautiful and responsive websites using HTML, CSS and JavaScript.",
    },
    {
      id: 2,
      title: "Back End Development",
      description:
        "I can create server side logic using Node.js, Express and MongoDB.",
    },
    {
      id: 3,
      title: "Full Stack Development",
      description:
        "I can create full stack applications using React, Node.js, Express and MongoDB.",
    },
    {
      id: 4,
      title: "WordPress Development",
      description:
        "I can create wordpress website and blogs using Divi and Elementor.",
    },
    {
      id: 5,
      title: "Graphic Design",
      description:
        "I can create logos, banners, flyers, business cards and social media posts.",
    },
    {
      id: 6,
      title: "SEO",
      description:
        "I can optimize your website for search engines and increase your website",
    },
  ];

  return (
    <>
      <div
        className="bg-transparent text-white py-20 bg-no-repeat bg-center bg-cover"
        id="services"
      >
        <div className="container mx-auto px-8 md:px-16 md:m-0 lg:px-24 lg:m-0 ">
          <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border border-solid border-white p-2 md:p-8 lg:p-9">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                  {service.id}
                </div>
                <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-300">{service.description}</p>
                <a
                  href=""
                  className="mt-4 inline-block text-green-400 hover:text-blue-500"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
