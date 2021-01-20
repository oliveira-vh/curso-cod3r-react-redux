import React from "react";
import MembroFamilia from "./MembroFamilia";

const Familia = ({ sobrenomeMae, sobrenomePai }) => {
  return (
    <>
      <MembroFamilia
        nome="Pedro"
        sobrenomeMae={sobrenomeMae}
        sobrenomePai={sobrenomePai}
      />
      <MembroFamilia
        nome="Maria"
        sobrenomeMae={sobrenomeMae}
        sobrenomePai={sobrenomePai}
      />
    </>
  );
};

export default Familia;
