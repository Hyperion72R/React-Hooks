import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  //   let x = [];
  return (
    <>
      <input
        onChange={(e) => {
          setInputText(e.target.value + {<br />});
        }}
        placeholder="Enter some text"
      />
      <br />
      {inputText}
    </>
  );
};

export default InputElement;
