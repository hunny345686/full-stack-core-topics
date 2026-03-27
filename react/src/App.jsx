import DeferredValue from "./component/DeferredValue";
import ReactFiber from "./component/ReactFiber";

function App() {
  return (
    <div className="container">
      <h2>Hello React</h2>
      <hr />
      <ReactFiber />
      <hr />
      <DeferredValue />
    </div>
  );
}

export default App;
