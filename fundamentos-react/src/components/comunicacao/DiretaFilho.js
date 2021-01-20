import React from "react";

const DiretaFilho = (props) => {
  return (
    <div>
      <div>{props.texto}</div>
      <div>{props.numero}</div>
      {props.remista ? <div>Remista</div> : <div>Anti</div>}
    </div>
  );
};

export default DiretaFilho;
