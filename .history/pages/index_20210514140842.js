import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");

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
      {e.target.value}
    </>
  );
};

export default InputElement;
