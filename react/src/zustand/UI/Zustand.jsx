import React from "react";
import { useAuthStaor } from "../store/useAuthStore";

function Zustand() {
  const { login, user } = useAuthStaor();

  const handleLogin = () => {
    login({ name: "Prem Singh", email: "prem@gmail.com" });
    console.log(user);
  };
  return (
    <div className="container">
      <p>Zustang User Auth </p>
      <button onClick={handleLogin}>Get User</button>
    </div>
  );
}

export default Zustand;
