import React from "react";
import "./App.css";
import Primeiro from "./components/basicos/primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaChildren from "./components/basicos/FamiliaChildren";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="Componente Controlado" color="orange">
        <Input />
      </Card>

      <Card titulo="Comunicação Indireta" color="gray">
        <IndiretaPai />
      </Card>
      <Card titulo="Comunicação Direta" color="gray">
        <DiretaPai />
      </Card>

      <Card titulo="Renderização Condicional" color="gray">
        <ParOuImpar numero={20} />
        <UsuarioInfo usuario={{ nome: "Vitão" }} />
        <UsuarioInfo usuario={{ nome: "Fernanda", email: "fer@mail.com.br" }} />
        <UsuarioInfo />
      </Card>

      <Card titulo="Desafio - Produtos" color="gray">
        <TabelaProdutos />
      </Card>

      <Card titulo="Repetição - Alunos" color="green">
        <ListaAlunos />
      </Card>

      <Card titulo="Componente com Filhos/children" color="green">
        <FamiliaChildren
          nome="Fulano"
          sobrenomeMae="Sousa"
          sobrenomePai="de Oliveira"
        />
      </Card>

      <Card titulo="Componente com Filhos/props" color="green">
        <Familia sobrenomeMae="Sousa" sobrenomePai="de Oliveira" />
      </Card>

      <Card titulo="Exemplo de Card" color="green">
        <Aleatorio min={8} max={16} />
      </Card>

      <Card titulo="Número Aleatório">
        <Aleatorio min={8} max={16} />
      </Card>

      <Card titulo="Componente #2">
        <ComParametro
          titulo="Segundo Componente"
          subtitulo="Muito legal!"
          nota={7}
        />
      </Card>

      <Card titulo="Primeiro Componente">
        <Primeiro />
      </Card>
    </div>
  </div>
);
