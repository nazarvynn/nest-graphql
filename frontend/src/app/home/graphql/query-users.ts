import { gql } from 'apollo-angular';

export const USERS = gql`
  query users {
    users {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
