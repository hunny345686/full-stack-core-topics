import { lazy, Suspense } from "react";
import DeferredValue from "./component/DeferredValue";
import Parent from "./component/Parent";
import ReactFiber from "./component/ReactFiber";

import ContextParant from "./ContextAPI/ContextParant"

// Not work due to lazy will expect to retn a pronisss
// const DashBoradLazy = lazy(() =>
//   setTimeout(() => import("./component/Dashboard.js"), 1000)
// );

const ParentLazy = lazy(() => import("./component/Parent"));
const DashBoradLazy = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./component/Dashboard.js")), 5000);
    })
);
function App() {
  return (
    <div className="container">
      <h2>Hello React</h2>
      <hr />
      <ReactFiber />
      <hr />
      <DeferredValue />

      <hr />
      {/* Without Lazy Loafing */}
      <Parent />
      {/* With Lazy Loading */}
      <ParentLazy />
      <hr />

      <Suspense fallback={<h2>Loiding</h2>}>
        <DashBoradLazy />
      </Suspense>
      <hr/>
      {/* Context API */}

      <ContextParant/>
    </div>
  );
}

export default App;
