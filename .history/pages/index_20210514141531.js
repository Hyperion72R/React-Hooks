import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  //   let x = [];
  return (
    <>
      <input
        onChange={(x) => {
          x = inputText;
          x + "<br />";
        }}
        placeholder="Enter some text"
      />
      <br />
      {inputText}
    </>
  );
};

export default InputElement;
