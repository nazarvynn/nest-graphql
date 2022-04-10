import { gql } from 'apollo-angular';

export const CREATE_USER = gql`
  mutation createUser($createUser: CreateUserInput!) {
    createUser(createUserInput: $createUser) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
