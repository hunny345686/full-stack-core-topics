import { useContext } from "react";
import ContextGreatGrandChild from "./ContextGreatGrandChild";
import { Context } from "./store";

function ContextGrandChild() {
  console.log("function ContextGrandChild Calling");
  const { sayHello } = useContext(Context);

  return (
    <div>
      <p>ContextGrandChild {sayHello} </p>
      <ContextGreatGrandChild />
    </div>
  );
}

export default ContextGrandChild;
