import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  let x = [""];
  return (
    <>
      <input
        onChange={(e) => {
          setInputText(
            (x =
              e.target.value &&
              x.map(function (x) {
                return x + <br />;
              }))
          );
        }}
        placeholder="Enter some text"
      />
      <br />
      {inputText}
    </>
  );
};

export default InputElement;
