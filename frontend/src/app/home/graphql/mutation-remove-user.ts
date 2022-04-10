import { gql } from 'apollo-angular';

export const REMOVE_USER = gql`
  mutation removeUser($id: Int!) {
    removeUser(id: $id) {
      email
    }
  }
`;
