import React from "react";
import MembroFamiliaChildren from "./MembroFamiliaChildren";

const FamiliaChildren = ({ nome, sobrenomeMae, sobrenomePai }) => {
  return (
    <>
      <MembroFamiliaChildren>
        {nome} {sobrenomeMae} {sobrenomePai}
      </MembroFamiliaChildren>
    </>
  );
};

export default FamiliaChildren;
