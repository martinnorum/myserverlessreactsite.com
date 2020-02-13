import React from 'react'
import { navigate } from 'gatsby'
import { AuthProvider } from 'react-use-auth'

export const wrapRootElement = ({ element }) => (
    <AuthProvider
        navigate={navigate}
        auth0_client_id="NHhoQfBiW8f2eSMhJedi6V5xjW3gO6zL"
        auth0_domain="martinnorum.eu.auth0.com"
    >
        { element }
    </AuthProvider>
)