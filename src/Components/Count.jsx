import propTypes from "prop-types";

const Count = (props) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        {props.count}
      </h3>
      <p>{props.countType}</p>
    </div>
  );
};

Count.propTypes = {
  count: propTypes.string,
  countType: propTypes.string,
};

export default Count;
