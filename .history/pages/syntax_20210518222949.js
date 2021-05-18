import React, { useEffect, useState } from "react";

const Syntax = () => {
  let [checkBoxValue, setcheckBoxValue] = useState(false);

  console.log(setcheckBoxValue);

  let handleChange = function (e) {
    setcheckBoxValue = e.target.checked;

    // console.log(setcheckBoxValue);
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
