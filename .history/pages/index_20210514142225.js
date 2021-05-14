import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  let x = [];
  console.log(x);
  return (
    <>
      <input
        onChange={(e) => {
          setInputText((x = e.target.value));
        }}
        placeholder="Enter some text"
      />
      <br />
      {inputText}
    </>
  );
};

export default InputElement;
