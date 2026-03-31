import React from "react";

// Child Will Re render Evne nothing chnge in Child COmponent
function ChildA() {
  return <div>Child</div>;
}
const Child = React.memo(() => {
  return <div>Recr memo Chile</div>;
});
export default Child;
