import { useRef } from "react";
import envelope from "../assets/envelope-solid.svg";
import location from "../assets/location-dot-solid.svg";
import phone from "../assets/phone-solid.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import whatsapp from "../assets/whatsapp.svg";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    const mailtoLink = `mailto:yoshithakaveesh83@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(
      name
    )}%0AEmail:%20${encodeURIComponent(
      email
    )}%0AMessage:%20${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };
  return (
    <>
      <div className="bg-transparent text-white py-20 " id="contact">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 ">
          <h2 className="text-4xl font-bold text-center mb-12">Contact me</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-12 border border-solid border-white p-2 md:p-8 lg:p-9">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-3">
                Let&apos;s Talk
              </h3>
              <p>I&apos;m open to work</p>
              <div className="mb-4 mt-8">
                <img
                  className="inline mr-6 w-8 h-8 t"
                  src={envelope}
                  alt="Envelope icon"
                />

                <a
                  href="mailto:yoshithakaveesh83@gmail.com"
                  className="hover:underline"
                >
                  yoshithakaveesh83@gmail.com
                </a>
              </div>
              <div className="mb-4 mt-8">
                <img
                  className="inline mr-6 w-8 h-8 t"
                  src={phone}
                  alt="Envelope icon"
                />{" "}
                <span>+94768566498</span>
              </div>
              <div className="mb-4 mt-8">
                <img
                  className="inline mr-6 w-8 h-8 t"
                  src={location}
                  alt="Envelope icon"
                />{" "}
                <span>No:35, Suncity, Haliwala, Galle</span>
              </div>
              <div className="mb-4 mt-8 flex flex-row justify-evenly">
                <a href="https://www.linkedin.com/in/kaveeshyoshitha/">
                  <img
                    className="mr-6 w-8 h-8 hover:shadow-lg transform transition-transform duration-300 hover:scale-125"
                    src={linkedin}
                    alt="Linkedin"
                  />
                </a>
                <a href="https://github.com/KaveeshYoshitha">
                  <img
                    className="mr-6 w-8 h-8  hover:shadow-lg transform transition-transform duration-300 hover:scale-125"
                    src={github}
                    alt="github"
                  />
                </a>
                <a href="https://wa.me/qr/PQSMHP2VKXCDI1">
                  <img
                    className="mr-6 w-8 h-8  hover:shadow-lg transform transition-transform duration-300 hover:scale-125"
                    src={whatsapp}
                    alt="whatsapp"
                  />
                </a>
              </div>
            </div>
            <div className="flex-1 w-full">
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    className="w-full p-2 rounded bg-gray-800 border border-solid border-white focus:outline-none focus:border-green-400"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    className="w-full p-2 rounded bg-gray-800 border border-solid border-white focus:outline-none focus:border-green-400"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="w-full p-2 rounded bg-gray-800 border border-solid border-white focus:outline-none focus:border-green-400"
                    rows={5}
                    placeholder="Enter Your Message"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover-scale-105 px-8 py-2 rounded-full"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
