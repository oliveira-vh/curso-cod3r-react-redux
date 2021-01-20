import React from "react";

const ParOuImpar = ({ numero }) => {
  return (
    <div>
      <p>
        Seu número é {numero} e ele é{" "}
        {numero % 2 === 0 ? <span>Par</span> : <span>Ímpar</span>}
      </p>
    </div>
  );
};

export default ParOuImpar;
