const {gql} = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favoriteMovies: [Movie]
    }

    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }

    type Query {
        users: [User!]!
        movies: [Movie!]!
        user(id: ID!): User!
        movie(name: String!): Movie!
        movieById(id: ID!): Movie!
    }

    enum Nationality {
        CANADA
        BRAZIL
        INDIA
        GERMANY
        CHILE
    }
`

module.exports.typeDefs = typeDefs;