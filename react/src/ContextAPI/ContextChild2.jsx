import React from "react";
import ContextGreatGrandChild from "./ContextGreatGrandChild";

function ContextChild2() {
  console.log("function ContextChild2 Calling");

  return (
    <div>
      <p>ContextChild2</p>
      <ContextGreatGrandChild />
    </div>
  );
}

export default ContextChild2;
