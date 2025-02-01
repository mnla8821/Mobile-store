import React, { useState } from "react";

const useCount = (param) => {
  const [count, setCount] = useState(param);
  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };
  return [count, handleIncrease, handleDecrease];
};
export default useCount;
