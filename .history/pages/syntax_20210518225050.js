import React, { useEffect, useState } from "react";

const Syntax = () => {
  let [checkBoxValue, setCheckBoxValue] = useState(false);

  setCheckBoxValue = function (e) {
    checkBoxValue = e.target.checked;

    // console.log(checkBoxValue);
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
        onChange={setCheckBoxValue}
      />
    </>
  );
};

export default Syntax;
