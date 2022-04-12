import { gql } from "@apollo/client";

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
