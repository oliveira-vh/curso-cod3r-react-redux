import React from "react";
import DiretaFilho from "./DiretaFilho";

const DiretaPai = (props) => {
  return (
    <div>
      <DiretaFilho texto="Filho 1" numero={33} remista={true} />
      <DiretaFilho texto="Filho 2" numero={99} remista={false} />
    </div>
  );
};

export default DiretaPai;
