const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    donations: [Donation]
    donationCount: Int
    firstName: String!
    lastName: String!
  }

  type Pet {
    _id: ID!
    name: String!
    breed: String
    age: Int
    gender: String
    image: String
    alt: String
    headline: String
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
    addUser(
      username: String!
      email: String!
      password: String!
      firstName: String!
      lastName: String!
    ): Auth
    addPet(name: String!, breed: String, age: Int, gender: String, image: String, alt: String, headline: String, summary: String!): Pet
    login(username: String, email: String, password: String!): Auth
    donate(amount: Int!, message: String, pets: [ID]): Donation
  }
`;

module.exports = typeDefs;
