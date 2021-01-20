import React from "react";

const MembroFamilia = ({ nome, sobrenomeMae, sobrenomePai }) => {
  return (
    <div>
      <strong>{nome}</strong> {sobrenomeMae} {sobrenomePai}
    </div>
  );
};

export default MembroFamilia;
