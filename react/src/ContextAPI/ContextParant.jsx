import ContextChild from "./ContextChild";
import ContextChild2 from "./ContextChild2";
import HelloContext from "./store";

function ContextParant() {
  console.log("function ContextParant Calling");

  return (
    <HelloContext>
      <div className="container">
        <p>ContextParant</p>
        <ContextChild />
        <ContextChild2 />
      </div>
    </HelloContext>
  );
}

export default ContextParant;
