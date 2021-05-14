import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  let x = [];
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
      {(x) => inputText(e.target.value)}
    </>
  );
};

export default InputElement;
