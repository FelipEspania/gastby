import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>Sobre {data.site.siteMetadata.title}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo
      augue non laoreet volutpat. Suspendisse odio sem, feugiat ac justo non,
      varius fermentum nunc. Maecenas iaculis sagittis ex quis ornare. Nullam
      commodo leo a turpis aliquet viverra. Donec in enim quis nisl egestas
      tempor sit amet et dolor.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
