const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID!
  username: String!
  email: String!
  password: String!
  donations: [Donation]
  donationCount: Int
  pets: [Pet]
  firstName: String!
  lastName: String!
}

type Pet {
  _id: ID!
  name: String!
  image: String
  summary: String!
  supplies: [Supply]
  supCount: Int
  donations: [Donation]
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

type Checkout {
  session: ID
}

type Query {
  users: [User]
  oneUser(id: ID, username: String): User
  pets: [Pet]
  onePet(id: ID, name: String): Pet
  donation(_id: ID!): Donation
  checkout(pets: [ID]!): Checkout
}

type Mutation {
  addUser(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): Auth
  addPet(name: String!, image: String, summary: String!): Pet
  login(username: String, email: String, password: String!): Auth
  donate(amount: Int!, message: String, pets: [ID]): Donation
}
`;

module.exports = typeDefs;