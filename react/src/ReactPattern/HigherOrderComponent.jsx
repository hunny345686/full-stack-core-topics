import React from "react";

function Dashboard() {
  return (
    <div>
      <p>Dashboard Hello word</p>
    </div>
  );
}

function WithAuth(Component) {
  return function WrapComponent(props) {
    const isAuth = true;
    if (!isAuth) {
      return <div>Login</div>;
    }
    return <Component {...props} />;
  };
}

function HigherOrderComponent() {
  const Protected = WithAuth(Dashboard);
  return (
    <div>
      <Protected />
    </div>
  );
}

export default HigherOrderComponent;
