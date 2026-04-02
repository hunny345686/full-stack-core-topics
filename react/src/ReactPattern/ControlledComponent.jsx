import React, { useState } from "react";

function ControlledComponent() {
  const [input, setinput] = useState("");

  const handelChange = (e) => {
    setinput(e.target.value);
  };
  return (
    <div>
      <p>ControlledComponent </p>
      <input type="text" value={input} onChenge={handelChange} />
    </div>
  );
}

export default ControlledComponent;
