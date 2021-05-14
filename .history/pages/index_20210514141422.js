import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  //   let x = [];
  return (
    <>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        placeholder="Enter some text"
      />
      <br />
      {inputText}
      <br />
      {(x) => {
        x = "inputText";
        x + "<br />";
      }}
    </>
  );
};

export default InputElement;
