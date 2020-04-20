import React from "react"
import Layout from "../components/layout"
//https://www.flexyform.com/dashboard
export default () => (
  <Layout>
    <form className="formulario">
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
      <label>
        Comentario
        <textarea type="text" name="comentario" required></textarea>
      </label>
      <input type="submit" value="Enviar" />
    </form>
  </Layout>
)
