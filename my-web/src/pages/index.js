import React from "react"
import Layout from "../components/layout"
import Me from "../image/profile_img.jpeg"

export default () => (
  <Layout>
    <h2>Borrar --- Inicio --- Borrar</h2>
    <img
      style={{ borderRadius: "50%", width: "20%", float: "left" }}
      src={Me}
      alt="FelipeEspania"
    />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum
      ultrices ligula accumsan suscipit. Nullam placerat mi nec viverra egestas.
      Integer aliquet tincidunt mattis. Ut quis scelerisque tortor. Maecenas
      luctus vulputate pulvinar. Pellentesque sit amet tellus sagittis, accumsan
      quam id, pulvinar eros. Integer non mauris tincidunt, fringilla elit
      vitae, malesuada velit. Maecenas orci nunc, tempor ac interdum non,
      eleifend vitae magna.
    </p>
  </Layout>
)
