import React, { useEffect, useState } from "react";
import { render } from "react-dom";

let Syntax = () => {
  let [checkBoxValue, setCheckBoxValue] = useState(true);

  let handleChange = function (e) {
    let checked = e.target.checked;
    setCheckBoxValue({ ...checkBoxValue });
    console.log(checked);
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
        defaultChecked={checkBoxValue}
        onChange={handleChange}
      />
      {/* <input name="isGoing" type="text" onChange={setCheckBoxValue} /> */}
    </>
  );
};

export default Syntax;
