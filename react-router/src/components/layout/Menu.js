import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = (props) => (
  <aside className="Menu">
    <nav>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/param/1">Param #1</Link>
        </li>
        <li>
          <Link to="/param/futebol">Param #2</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/naoExiste">Não Existe</Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Menu;
