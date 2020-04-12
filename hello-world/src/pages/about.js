import React from "react"
import Header from "../components/header"

export default () => (
  <div style={{ color: "green" }}>
    <Header headerText="About Gatsby" />
    <Header headerText="Second About" />
    <p>Say Hi to About!</p>
    <br />
    <a href="about">About</a>
    <br />
    <a href="/">index</a>
  </div>
)
