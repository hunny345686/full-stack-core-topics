import React from "react";
import ContextGrandChild from "./ContextGrandChild";

function ContextChild() {
  console.log("function ContextChild Calling");
  return (
    <div>
      <p>ContextChild</p>
      <ContextGrandChild />
    </div>
  );
}

export default ContextChild;
