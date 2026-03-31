import React, { useContext } from "react";
import { Context } from "./store";

function ContextGreatGrandChild() {
  const { sayHello, setsayHI } = useContext(Context);
  console.log("function ContextGreatGrandChild Calling");

  return (
    <div>
      <p>ContextGreatGrandChild {sayHello}</p>
      <button
        onClick={() => {
          setsayHI("HI");
        }}
      >
        Say Hi
      </button>
    </div>
  );
}

export default ContextGreatGrandChild;
