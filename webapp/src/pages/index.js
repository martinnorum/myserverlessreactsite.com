import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Heading, Button } from 'rebass'

const IndexPage = () => (
  <Layout>
    <SEO title="Markdown Landing Page" />
    <Heading fontSize={[5, 6, 7]}>Markdown Landing Page</Heading>
    <p>Write a landing page for anything</p>
    <Button bg='highlight'>Get Started</Button>
    
  </Layout>
)

export default IndexPage
