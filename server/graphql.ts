const { ApolloServer, gql } = require('apollo-server-lambda');


// This is where we define the shape of the API
const schema = gql`
    type Hello {
        world: String
    }

    type Query {
        hello: Hello
        goodbye: Hello
    }
`

// This is where the shape maps to function
const resolvers = {
    Query: {
        hello: () => ({
            world: "Hello World"
        }),

        goodbye: () => ({
            world: "Goodbye Cruel World"
        })
    }
}

const server = new ApolloServer({ typeDefs: schema, resolvers })

export const handler = server.createHandler({
    cors: {
        origin: '*',
        credentials: true
    }
})