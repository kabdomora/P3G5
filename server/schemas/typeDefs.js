const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID!
  username: String!
  email: String!
  password: String!
  contPets: [Pet]
  donations: [Donation]
  petCount: Int
  donationCount: Int
}



type Auth {
  token: ID!
  user: User
}

type Query {
  users: [User]
  oneUser(id: ID!, username: String!): User
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(username: String, email: String, password: String!): Auth
}
`;

module.exports = typeDefs;