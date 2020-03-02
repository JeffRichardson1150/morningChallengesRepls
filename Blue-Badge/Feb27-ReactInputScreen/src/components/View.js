import React from "react";

const View = props => {
  return (
    <div>
      <h3>{props.viewName}</h3>
      <h3>{props.viewAge}</h3>
      <h3>{props.viewHobbies}</h3>
    </div>
  );
};

export default View;
