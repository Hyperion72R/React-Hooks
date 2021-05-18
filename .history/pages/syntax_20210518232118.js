import React, { useEffect, useState } from "react";
import { render } from "react-dom";

let Syntax = () => {
  let [checkBoxValue, setCheckBoxValue] = useState("");

  setCheckBoxValue = function (e) {
    checkBoxValue = e.target.value;

    console.log(checkBoxValue);
    // console.log("TEST");
    // console.log(checkBoxValue);
  };

  useEffect(() => {
    console.log("in useEffect");
    return () => {
      console.log("in useEffect Cleanup");
    };
  }, [checkBoxValue]);

  return (
    <>
      <input
        name="isGoing"
        type="checkbox"
        // defaultChecked={checkBoxValue}
        onChange={setCheckBoxValue}
      />
      <input name="isGoing" type="text" onChange={setCheckBoxValue} />
    </>
  );
};

export default Syntax;
