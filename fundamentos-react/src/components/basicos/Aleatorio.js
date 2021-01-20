import React from "react";

const Aleatorio = ({ min, max }) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;

  return <p>Seu numero aleatório é: {num}</p>;
};

export default Aleatorio;
