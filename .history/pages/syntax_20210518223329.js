import React, { useEffect, useState } from "react";

const Syntax = () => {
  let [checkBoxValue, setcheckBoxValue] = useState(false);

  useEffect(() => {
    console.log("in useEffect");
    return () => {
      console.log("in useEffect Cleanup");
    };
  }, [checkBoxValue]);

  let handleChange = function (e) {
    setcheckBoxValue = e.target.checked;

    console.log(setcheckBoxValue);
    // console.log("TEST");
    // console.log(checkBoxValue);
  };

  return (
    <>
      <input name="isGoing" type="checkbox" onChange={handleChange} />
    </>
  );
};

export default Syntax;
