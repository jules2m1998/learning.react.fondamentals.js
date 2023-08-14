import { CounterContext } from "../contexts";
import { useState } from "react";

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  return (
    <CounterContext.Provider value={[counter, setCounter]}>
      {children}
    </CounterContext.Provider>
  );
};
