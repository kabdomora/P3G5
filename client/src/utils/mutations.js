import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($username: String!, $email: String!, $password: String!) {
    login(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_DONATION = gql`
  mutation Donate($amount: Int!, $message: String, $pets: [ID]!) {
    donate(amount: $amount, message: $message, pets: $pets) {
      _id
      amount
      message
      donationDate
      pets {
        _id
        name
        summary
        supplies {
          type
          cost
        }
      }
    }
  }
`;