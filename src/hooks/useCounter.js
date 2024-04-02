import { useState } from "react";

export const useConter = () => {
  const [counter, setCounter] = useState(0);

  const handleApp = () => {
    setCounter(counter + 1);
  };

  const handReset = () => {
    setCounter(0);
  };

  const handRest = () => {
    setCounter(counter - 1);
  };

  return { counter, handleApp, handRest, handReset };
};
