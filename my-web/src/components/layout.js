import React from "react"
import "./layout.css"
import Logo from "../image/logo.png"
import { Link } from "gatsby"
const ListLink = props => (
  <li
    style={{ display: `inline-block`, marginRight: `1rem`, paddingTop: `15px` }}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div className="center">
    <div className="cuerpo">
      <header>
        <img
          src={Logo}
          alt="Logo"
          style={{
            float: "left",
            width: "33px",
            marginTop: "12px",
            paddingLeft: "5px",
          }}
        />
        <h1 style={{ float: `left`, display: `inline` }}>FelipeEspania</h1>
        <ul className="menu">
          <ListLink to="/">Sobre mi</ListLink>
          <ListLink to="/projects">Proyectos</ListLink>
          <ListLink to="/contact">Contacto</ListLink>
        </ul>
      </header>
      <div className="clearfix"></div>
      {children}
      <div className="clearfix"></div>
      <footer>
        <div className="center">
          <p>&copy; Felipe Espania 2020</p>
        </div>
      </footer>
    </div>
  </div>
)
