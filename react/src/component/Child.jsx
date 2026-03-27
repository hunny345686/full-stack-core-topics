import React from "react";

// Child Will Re render Evne nothing chnge in Child COmponent
function ChildA() {
  console.log("Child Rendring");
  return <div>Child</div>;
}
const Child = React.memo(() => {
  console.log(
    "Will not reRender on parent changes only reder on childe changes"
  );
  return <div>Recr memo Chile</div>;
});
export default Child;
