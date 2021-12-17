import React, { useState } from "react";

const Filter = () => {
  const [color, setcolor] = useState([
    "CB2D3E",
    "D76B26",
    "FFD200",
    "159957",
    "1CB5E0",
    "155799",
    "EF32D9",
    "EAEAEA",
    "C0C0CB",
  ]);
  return (
    <div className="colorlist">
      {color.map((el) => (
        <div className="color" style={{ backgroundColor: `#${el}` }}></div>
      ))}
    </div>
  );
};

export default Filter;
