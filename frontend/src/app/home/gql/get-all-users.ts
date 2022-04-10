import { gql } from '@apollo/client/core';

export const GET_ALL_USERS = gql`
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
