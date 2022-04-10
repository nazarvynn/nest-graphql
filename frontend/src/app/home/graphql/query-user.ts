import { gql } from 'apollo-angular';

export const USER = gql`
  query user($id: Int!) {
    user(id: $id) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
