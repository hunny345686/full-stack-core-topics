import { createContext, useState } from "react";

export const Context = createContext();

const HelloContext = ({ children }) => {
  const [sayHello, setsayHI] = useState("Hello");
  return (
    <Context.Provider value={{ sayHello, setsayHI }}>
      {children}
    </Context.Provider>
  );
};

export default HelloContext;
