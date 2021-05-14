import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);

  return (
    <>
      <input
        onChange={(e) => {
          setInputText(e.target.value && inputText=historyList)
        }}
        placeholder="Enter some text"
      />
      <br />
      {inputText}
    </>
  );
};

export default InputElement;