import React, { useState } from "react";

const Inputs = props => {
  const setName = props.changeName;
  const setAge = props.changeAge;
  const setHobbies = props.changeHobbies;

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <br />
      <input
        type="text"
        id="name"
        // value={name}
        onChange={e => setName(e.target.value)}
      />
      <br />
      <label htmlFor="age">Age:</label>
      <br />
      <input
        type="number"
        id="age"
        // value={age}
        onChange={e => setAge(e.target.value)}
      />
      <br />
      <label htmlFor="hobbies">Hobbies:</label>
      <br />
      <input
        type="text"
        id="hobbies"
        // value={hobbies}
        onChange={e => setHobbies(e.target.value)}
      />
    </div>
  );
};

export default Inputs;
