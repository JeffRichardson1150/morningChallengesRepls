// Created this in sandbox.io
// I signed up through my github account

import React, { useState } from "react";
import Inputs from "./components/Inputs";
import View from "./components/View";

import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [hobbies, setHobbies] = useState("");

  return (
    <div className="App">
      {/* <Inputs personData={(setName, age, hobbies)} /> */}
      <Inputs
        changeName={setName}
        changeAge={setAge}
        changeHobbies={setHobbies}
      />
      <View viewName={name} viewAge={age} viewHobbies={hobbies} />
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
