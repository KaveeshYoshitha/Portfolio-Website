import propTypes from "prop-types";

const Skills = (props) => {
  return (
    <>
      <div className="flex items-center">
        <label htmlFor="htmlandcss" className="w-2/12">
          {props.skillName}
        </label>
        <div className="grow bg-gray-200 rounded-full h-2.5">
          <div
            className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 ${props.skillLevel}`}
          ></div>
        </div>
      </div>
    </>
  );
};

Skills.propTypes = {
  skillName: propTypes.string,
  skillLevel: propTypes.string,
};
export default Skills;
