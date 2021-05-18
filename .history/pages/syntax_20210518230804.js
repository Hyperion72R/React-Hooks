import React, { useEffect, useState } from "react";
import { render } from "react-dom";

let Syntax = () => {
  let [checkBoxValue, setCheckBoxValue] = useState(false);

  setCheckBoxValue = function (e) {
    checkBoxValue = e.target.checked;

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
        defaultChecked={checkBoxValue}
        onChange={setCheckBoxValue}
      />
    </>
  );
};

function MainSyntax() {
return ( 
    <div>
        function render() {
            return (
            <>
                <Syntax />
            </>
            );
        }
        render();
    </div>
        )
    
}

export default MainSyntax;
