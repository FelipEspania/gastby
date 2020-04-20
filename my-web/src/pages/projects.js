import React from "react"
import Layout from "../components/layout"
import Home from "../image/suhogarsuoportunidad.png"
import Connect from "../image/360connect.png"
import Principal from "../image/principal.png"
import "./projects.css"

export default () => (
  <Layout>
    <h2>Projectos</h2>
    <div>
      <article>
        <img className="suhogarsu" src={Home} alt="su Hogar su Oportunidad" />
        <h2>SuHogarSuOportunidad</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          dictum ultrices ligula accumsan suscipit. Nullam placerat mi nec
          viverra egestas. Integer aliquet tincidunt mattis. Ut quis scelerisque
          tortor. Maecenas luctus vulputate pulvinar. Pellentesque sit amet
          tellus sagittis, accumsan quam id, pulvinar eros. Integer non mauris
          tincidunt, fringilla elit vitae, malesuada velit. Maecenas orci nunc,
          tempor ac interdum non, eleifend vitae magna.
        </p>
      </article>
    </div>
    <div>
      <article>
        <img src={Connect} alt="360 Connect" />
        <h2>Bci WholeSale Banking</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          dictum ultrices ligula accumsan suscipit. Nullam placerat mi nec
          viverra egestas. Integer aliquet tincidunt mattis. Ut quis scelerisque
          tortor. Maecenas luctus vulputate pulvinar. Pellentesque sit amet
          tellus sagittis, accumsan quam id, pulvinar eros. Integer non mauris
          tincidunt, fringilla elit vitae, malesuada velit. Maecenas orci nunc,
          tempor ac interdum non, eleifend vitae magna.
        </p>
      </article>
      <div>
        <article>
          <img src={Principal} alt="Principal Financial Group" />
          <h2>Data Area in Principal Financial Group</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            dictum ultrices ligula accumsan suscipit. Nullam placerat mi nec
            viverra egestas. Integer aliquet tincidunt mattis. Ut quis
            scelerisque tortor. Maecenas luctus vulputate pulvinar. Pellentesque
            sit amet tellus sagittis, accumsan quam id, pulvinar eros. Integer
            non mauris tincidunt, fringilla elit vitae, malesuada velit.
            Maecenas orci nunc, tempor ac interdum non, eleifend vitae magna.
          </p>
        </article>
      </div>
    </div>
  </Layout>
)
