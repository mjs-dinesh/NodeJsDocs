import { useState } from "react";
export function Counter({ children }) {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => setCount(count + 1)}
      style={{
        borderRadius: "10px",
        backgroundColor: "teal",
        color: "white",
        padding: "5px",
        marginTop: "10px",
      }}
    >
      {children}
      {count}
    </button>
  );
}
