import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);

  let x = function () {
    historyList.map(function (z) {
      return z + <br />;
      console.log(x);
    });
  };

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
      {x(inputText)}
    </>
  );
};

export default InputElement;
