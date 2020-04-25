import React from "react"
import Layout from "../components/layout"
import Me from "../image/profile_img.jpeg"

export default () => (
  <Layout>
    <h2>Sobre mi</h2>
    <img
      style={{
        borderRadius: "50%",
        width: "20%",
        float: "left",
        paddingRight: "20px",
        paddingLeft: "8px",
      }}
      src={Me}
      alt="FelipeEspania"
    />
    <div style={{ marginTop: "40px", textAlign: "left", width: "90%" }}>
      <p>
        Ingeniero informático en Santiago de Chile, con ganas de siempre
        aprender y mejorar en todos los desafíos que se me cruzan.
      </p>
      <p>
        En los últimos 5 años me he dedicado un 60% de mi tiempo a evangelizar
        las metodologías agiles y en particular el Scrum, como Scrum Master. El
        otro 40% me dedico a mi familia, lectura, deportes y desarrollos web o
        una que otra automatización.
      </p>
      <p>
        En años atrás antes de ser Scrum Master, fui desarrollador, enfocado al
        front-end y en una oportunidad tuve la suerte de mantener servidores y
        realizar automatizaciones.
      </p>
      <p>
        Y en mis primeros pasos en el mundo laboral, fui asistente de camionero
        en una empresa de logística, realizando retiros, descargando camiones y
        armando pallets.
      </p>
      <p>
        Como ves, empecé desde abajo y eso te demuestra que lo que dice el
        primer párrafo es verdad. Espero que si necesitas ayuda o consejo
        quieras hablar y me{" "}
        <a
          href="/contact"
          style={{
            textDecoration: "none",
            color: "#665F4F",
            fontWeight: "bold",
          }}
        >
          contactes.
        </a>
      </p>
    </div>
    <div>
      <h4>Conectemos</h4>
      <a
        href="https://twitter.com/FelipeEspania"
        target="_blank"
        rel="noopener noreferrer"
        style={{ paddingRight: "35px" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
        </svg>
      </a>
      <a
        href="https://www.instagram.com/felipespania/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ paddingRight: "35px" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/felipeespana1988/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          name="LinkedIn"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>
    </div>
  </Layout>
)
