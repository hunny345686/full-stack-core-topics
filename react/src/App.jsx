import DeferredValue from "./component/DeferredValue";
import Parent from "./component/Parent";
import ReactFiber from "./component/ReactFiber";

function App() {
  return (
    <div className="container">
      <h2>Hello React</h2>
      <hr />
      <ReactFiber />
      <hr />
      <DeferredValue />

      <hr />
      <Parent />
    </div>
  );
}

export default App;
