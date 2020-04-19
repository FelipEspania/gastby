import React from "react"
import "./layout.css"
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
    <header>
      <h1 style={{ float: `left`, display: `inline` }}>FelipeEspania</h1>
      <ul className="menu">
        <ListLink to="/">Inicio</ListLink>
        <ListLink to="/about">Acerca de</ListLink>
        <ListLink to="/projects">Proyectos</ListLink>
      </ul>
    </header>
    <div className="clearfix"></div>
    {children}
    <div className="clearfix"></div>
    <footer>
      <div className="center">
        <p>&copy; Felipe Espania</p>
      </div>
    </footer>
  </div>
)
