import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState();

  const handleClick = useCallback(() => {
    console.log("click");
  }, []);

  const obj = useMemo(() => {
    return {
      name: "Prem",
      age: 24,
    };
  }, []);
  return (
    <div>
      Parent Component
      <button onClick={() => setCount(count + 1)}>+</button>
      <Child
        //   Every Render New Function refrance will be the without useCallback
        onClick={() => {
          console.log("click");
        }}
        // With Usecallback
        onClickUseCallBack={handleClick}
      />
      <Child
        //   Chhilde Will redent again evrytime due obj refrence will not same on re render
        objWitoutuseMemo={{ name: "Pem", age: 20 }}
        // With useMemo it will oot rerande

        objWithUseMemo={obj}
      />
    </div>
  );
}

export default Parent;
