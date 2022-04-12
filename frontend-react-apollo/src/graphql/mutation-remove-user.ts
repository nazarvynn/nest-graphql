import { gql } from "@apollo/client";

export const REMOVE_USER = gql`
  mutation removeUser($id: Int!) {
    removeUser(id: $id) {
      email
    }
  }
`;
