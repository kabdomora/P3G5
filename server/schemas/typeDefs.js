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

type Pet {
  _id: ID!
  name: String!
  image: String
  summary: String!
  supplies: [Supply]
  supCount: Int
}

type DonationBar {
  totalAmount: Int!
  goalAmount: Int!
}

type Donation {
  _id: ID!
  amount: Int!
  message: String
}

type Supply {
  _id: ID!
  type: String!
  cost: Int!
}

type Auth {
  token: ID!
  user: User
}

type Query {
  users: [User]
  oneUser(id: ID!, username: String!): User
  pets: [Pet]
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  addPet(name: String!, image: String, summary: String!): Pet
  login(username: String, email: String, password: String!): Auth
}
`;

module.exports = typeDefs;