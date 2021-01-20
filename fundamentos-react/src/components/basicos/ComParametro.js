import React from "react";

export default function ComParametro({ titulo, subtitulo, nota }) {
  const status = nota >= 6 ? "Aprovado" : "Reprovado";

  return (
    <div>
      <h2>{titulo}</h2>
      <h3>{subtitulo}</h3>
      <h4>
        O Aluno tirou {nota} e está {status}
      </h4>
    </div>
  );
}
