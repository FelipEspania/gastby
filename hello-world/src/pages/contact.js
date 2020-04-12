import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: "red" }}>
    <Link to="/">Home</Link>
    <Header headerText="Contact" />
    <p>Hello Contact</p>
  </div>
)
