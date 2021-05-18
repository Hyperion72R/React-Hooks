import React, { useEffect, useState } from "react";

const Syntax = () => {
  let [checkBoxValue, setCheckBoxValue] = useState(false);

  setCheckBoxValue = function (e) {
    let checked = e.target.checked;

    console.log(checked);
    // console.log("TEST");
    // console.log(checkBoxValue);
  };

  useEffect(() => {
    console.log("in useEffect");
    return () => {
      console.log("in useEffect Cleanup");
    };
  }, [setCheckBoxValue]);

  return (
    <>
      <input name="isGoing" type="checkbox" onChange={setCheckBoxValue} />
    </>
  );
};

export default Syntax;
