import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {useAuth} from 'react-use-auth'
import { Heading, Button } from 'rebass'

const IndexPage = () =>  {
  const { isAuthenticated, user, login, logout } = useAuth()
  return (
  <Layout>
    <SEO title="Markdown Landing Page" />
    <Heading fontSize={[5, 6, 7]}>Markdown Landing Page</Heading>
    <p>Write a landing page for anything</p>
    {isAuthenticated() ? <p>hello {user.name}</p> : <p>Not logged in yet</p>}
    <Button bg='highlight' onClick={login}>Get Started</Button>
    <Button bg='highlight' onClick={logout}>Log out</Button>
  </Layout>
)}

export default IndexPage
