import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query OneUser($id: ID, $username: String) {
  oneUser(id: $id, username: $username) {
    firstName
    lastName
    username
    email
    donations {
      _id
      amount
      message
      donationDate
      pet {
        _id
        name
      }
    }
  }
}
`;

export const QUERY_PET = gql `
query OnePet($id: ID, $name: String) {
  onePet(id: $id, name: $name) {
    name
    alt
    image
    headline
    summary
    breed
    age
    gender
    supplies {
      type
      cost
    }
  }
}`;

export const QUERY_PETS = gql `
{
  pets {
    _id
    name
    image
    alt
    headline
    summary
    supplies {
      type
      cost
    }
  }
}`;

export const QUERY_DONATION = gql `
query Donation($id: ID!) {
  donation(_id: $id) {
    amount
    message
    donationDate
    pet {
      _id
    }
    user {
      _id
    }
  }
}`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($pets: [ID]!) {
    checkout(pets: $pets) {
      session
    }
  }
`;