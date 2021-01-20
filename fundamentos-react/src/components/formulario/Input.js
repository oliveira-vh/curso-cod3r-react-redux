import React, { useState } from "react";

const Input = (props) => {
  const [valor, setValor] = useState("Inicial");
  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          style={{ fontSize: "1.4rem" }}
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <input style={{ fontSize: "1.4rem" }} value={valor} readOnly />
        <input style={{ fontSize: "1.4rem" }} value={undefined} />
      </div>
    </div>
  );
};

export default Input;
