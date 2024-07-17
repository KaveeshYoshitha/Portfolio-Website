import AboutImage from "../assets/AboutImage.jpg";
import Skills from "./Skills";
import Count from "./Count";

const About = () => {
  return (
    <>
      <div className="bg-transparent text-white py-20 " id="about">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 ">
          <h2 className="text-4xl font-bold text-center mb-12">About me</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-12 border border-solid border-white p-2 md:p-8 lg:p-9">
            <img
              src={AboutImage}
              alt="Kaveesh Yoshitha"
              className="w-80 h-auto rounded object-cover mb-8 md:mb-0"
            />
            <div className="flex-1">
              <p className="text-lg mb-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                neque eveniet eum, debitis a eos corporis velit molestiae at
                labore officiis mollitia aliquam quaerat. Nemo quam ullam
                explicabo facere suscipit.
              </p>
              <div className="space-y-4">
                <Skills skillName="HTML & CSS" skillLevel="w-10/12" />
                <Skills skillName="JAVASCRIPT" skillLevel="w-8/12" />
                <Skills skillName="REACT" skillLevel="w-4/12" />
                <Skills skillName="SQL" skillLevel="w-8/12" />
                <Skills skillName="TAILWIND" skillLevel="w-6/12" />
              </div>
              <div className="mt-12 flex justify-between text-center">
                <Count count="1+" countType="Years Experience" />
                <Count count="5+" countType="Projects Completed" />
                <Count count="5+" countType="Skills" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
