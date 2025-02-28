import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Number: {number}</h1>
      
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
        <button onClick={() => setNumber(number + 2)}>Increment with 2</button>
        <button onClick={() => setNumber(number - 1)}>Decrement with 1</button>
        <button onClick={() => setNumber(number + 5)}>Increment with 5</button>
        <button onClick={() => setNumber(number - 2)}>Decrement with 2</button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setNumber(number * 5)}>Multiply with 5</button>
      </div>
    </div>
  );
}
