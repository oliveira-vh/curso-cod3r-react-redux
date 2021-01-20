import React from "react";
import produtos from "../../data/produtos";

const TabelaProdutos = () => {
  const trs = produtos.map((produto) => (
    <tr key={produto.id}>
      <td>{produto.id}</td>
      <td>{produto.nome}</td>
      <td>{produto.preco}</td>
    </tr>
  ));
  return (
    <table>
      <tr>
        <th>id</th>
        <th>Produto</th>
        <th>Preço (R$)</th>
      </tr>
      {trs}
    </table>
  );
};

export default TabelaProdutos;
