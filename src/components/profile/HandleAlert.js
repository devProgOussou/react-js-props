import React from "react";

const HandleAlert = (props) => {
  return (
    <button
      className="btn btn-outline-primary m-4"
      onClick={() => props.alertMyInput(props.name)}
    >
      Click Me
    </button>
  );
};
export default HandleAlert;
