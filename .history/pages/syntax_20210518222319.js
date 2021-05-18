import React, { useEffect, useState } from "react";

const Syntax = () => {
  const [checkBoxValue, setcheckBoxValue] = useState(false);

  let handleChange = function (e) {
    setcheckBoxValue = e.target.checked;
    console.log(setcheckBoxValue);
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
