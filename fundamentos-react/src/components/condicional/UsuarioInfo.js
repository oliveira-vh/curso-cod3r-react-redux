import React from "react";
import If from "./If";

export default (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test={usuario && usuario.nome}>
        <p>
          Seja bem vindo, <strong>{usuario.nome}</strong>!
        </p>
      </If>
      <If test={usuario && usuario.email}>
        <p>
          Seu email: <strong>{usuario.email}</strong>!
        </p>
      </If>
      <If test={!usuario || !usuario.nome}>
        <p>Seja bem vindo, Usuário(a)!</p>
      </If>
    </div>
  );
};
