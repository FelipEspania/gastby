import React from "react"
import Layout from "../components/layout"
import "./contact.css"

//https://www.flexyform.com/dashboard
export default () => (
  <Layout>
    <h1>
      <span role="img" aria-label="omailbox">
        &#x1F4EC;
      </span>
      Contacto
    </h1>
    <h2>¿Interesado en hablar?</h2>
    <h3>
      Pues rellena el formulario con tus preguntas e informacion que necesitas y
      te respondere en instantes.
      <span role="img" aria-label="test">
        &#x1F354;
      </span>
    </h3>
    <form
      className="formulario"
      method="post"
      action="https://www.flexyform.com/f/35549b2adb48238daa009979b4865ebc4674e457"
    >
      <div className="form-group1">
        <label>
          Nombre
          <input type="text" name="nombre" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Fono (Opcional)
          <input type="tel" name="fono" />
        </label>
      </div>
      <div className="form-group2">
        <label>
          Comentario
          <textarea type="text" name="comentario" required></textarea>
        </label>
        <input type="submit" value="Enviar" />
      </div>
    </form>

    <div className="clearfix"></div>

    <div>Conectate</div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z" />
    </svg>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        name="Twitter"
      >
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        name="LinkedIn"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    </div>
  </Layout>
)
