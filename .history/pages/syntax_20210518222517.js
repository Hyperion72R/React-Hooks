import React, { useEffect, useState } from "react";

const Syntax = () => {
  let [checkBoxValue, setcheckBoxValue] = useState(false);

  let handleChange = function (e) {
    let checked = e.target.checked;
    checkBoxValue = checked;
    console.log(checked);
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