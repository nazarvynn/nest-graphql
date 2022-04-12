import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation updateUser($updateUser: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUser) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
