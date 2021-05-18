import React, { useEffect, useState } from "react";

const Syntax = () => {
  const [checkBoxValue, setcheckBoxValue] = useState(false);

  useEffect(() => {
    console.log("in useEffect");
    return () => {
      console.log("in useEffect Cleanup");
    };
  }, [checkBoxValue]);

  return <div></div>;
};

export default Syntax;
