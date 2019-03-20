import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutMe = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>About me</h1>
      <p>Name:  YangyangCAO</p>
      <p>Role:  Developer</p>
      <p>Hobby: Coding</p>
      <p>Location: Wuhan</p>
    <Link to="/">Homepage</Link>
  </Layout>
)

export default AboutMe
