import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query OneUser($id: ID!, $username: String!) {
  oneUser(id: $id, username: $username) {
    contPets {
      name
    }
  }
}
`;