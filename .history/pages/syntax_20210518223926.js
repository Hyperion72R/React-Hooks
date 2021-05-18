import React, { useEffect, useState } from "react";

const Syntax = () => {
  let [checkBoxValue, setCheckBoxValue] = useState(null);

  let handleChange = function (e) {
    setCheckBoxValue = e.target.checked;

    console.log(setCheckBoxValue);
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
      <input name="isGoing" type="checkbox" onChange={handleChange} />
    </>
  );
};

export default Syntax;
