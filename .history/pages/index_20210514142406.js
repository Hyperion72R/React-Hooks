import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  let x = [""];
  return (
    <>
      <input
        onChange={(e) => {
          setInputText((x = e.target.value && console.log(x)));
        }}
        placeholder="Enter some text"
      />
      <br />
      {inputText}
    </>
  );
};

export default InputElement;
