import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {useAuth} from 'react-use-auth'
import { Heading, Button } from 'rebass'

const LoggedIn = ({name, action}) => (<>
  <p>hello {name}</p>
  <Button bg='highlight' onClick={action}>Log out</Button>
</>)

const LoggedOut = ({action}) => (<>
  <p>Not logged in yet</p>
  <Button bg='highlight' onClick={action}>Get Started</Button>
</>)

const IndexPage = () =>  {
  const { isAuthenticated, user, login, logout } = useAuth()
  return (
  <Layout>
    <SEO title="Markdown Landing Page" />
    <Heading fontSize={[5, 6, 7]}>Markdown Landing Page</Heading>
    <p>Write a landing page for anything</p>
    { isAuthenticated()
      ? <LoggedIn name={user.name} action={logout}></LoggedIn>
      : <LoggedOut action={login}></LoggedOut>
    }
  </Layout>
)}

export default IndexPage
