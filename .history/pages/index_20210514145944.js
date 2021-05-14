import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);

  return (
    <>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }}
        placeholder="Enter some text"
      />
      {/* <br />
      {inputText}
      <br /> */}
      <div>
        {historyList.map((rec) => {
          return <div key={rec}>{rec}</div>;
        })}
      </div>
    </>
  );
};

export default InputElement;
