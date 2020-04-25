import React from "react"
import Layout from "../components/layout"
import Connect from "../image/360connect.png"
import Principal from "../image/principal.png"
import "./projects.css"

export default () => (
  <Layout>
    <h2>Mis Projectos</h2>
    <article>
      <a
        href="http://www.suhogarsuoportunidad.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <h2>SuHogarSuOportunidad</h2>
      </a>
      <div style={{ width: "40%", float: "left" }}>
        <h4>Sobre el proyecto</h4>
        <p>
          Su hogar Su oportunidad nace en 2015 de la necesidad de una corredora
          de propiedades de hacer llegar sus ofertas a más personas con el
          interés de comprar alguna propiedad.
        </p>
      </div>
      <div style={{ width: "40%", float: "left", paddingLeft: "75px" }}>
        <h4>Caracteristicas</h4>
        <p>
          Catálogo de bienes raíces, con sus respectivos precios y
          características. Auto administrado para que tenga más flexibilidad de
          personalización.
        </p>
      </div>
      <div style={{ width: "50%", float: "left" }}>
        <h4>Tecnologia</h4>
        <ul style={{ listStyle: "none", display: "inline-flex" }}>
          <li style={{ paddingRight: "7px" }}>Wordpress</li>
          <li style={{ paddingRight: "7px", fontSize: "10px" }}>x</li>
          <li style={{ paddingRight: "7px" }}>Css3</li>
          <li style={{ paddingRight: "7px", fontSize: "10px" }}>x</li>
          <li style={{ paddingRight: "7px" }}>Html5</li>
          <li style={{ paddingRight: "7px", fontSize: "10px" }}>x</li>
          <li style={{ paddingRight: "7px" }}>Javascript</li>
        </ul>
      </div>
      <div className="clearfix"></div>
    </article>
    <article>
      <img src={Connect} alt="360 Connect" />
      <div className="clearfix"></div>
      <div style={{ width: "40%", float: "left" }}>
        <h4>Sobre el proyecto</h4>
        <p>
          Se le llama al proyecto de transformación digital para
          empresas/clientes al cual pertenecí hasta el 2018. Liderando equipos
          de trabajo como Scrum Master, implementando soluciones en el proceso
          de trabajo, removiendo impedimentos, capacitaciones, entre otros.
        </p>
      </div>
      <div style={{ width: "40%", float: "left", paddingLeft: "75px" }}>
        <h4>Caracteristicas</h4>
        <p>
          Webapp realizada con metodología Scrum, enfocada a empresas, con la
          obligación de entregarles las funcionalidades en el menor tiempo
          posible. Su objetivo que el cliente este lo menos posible en la
          webapp.
        </p>
      </div>
      <div className="clearfix"></div>
    </article>
    <article>
      <img src={Principal} alt="Principal Financial Group" />
      <div className="clearfix"></div>
      <div style={{ width: "40%", float: "left" }}>
        <h4>Sobre el proyecto</h4>
        <p>
          Pertenezco actualmente a Principal en el área de Data desde el 2019,
          donde lidero y gestiono equipos de trabajo como Scrum Master,
          trabajando con tecnologías de vanguardia e innovando.
        </p>
      </div>
      <div className="clearfix"></div>
    </article>
  </Layout>
)
