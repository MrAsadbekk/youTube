import { createContext } from "react";
import { useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [color, setColor] = useState(false);

  const handleColor = () => {
    setColor(!color);
  };

  return (
    <MyContext.Provider value={{ color, handleColor }}>
      {children}
    </MyContext.Provider>
  );
};
