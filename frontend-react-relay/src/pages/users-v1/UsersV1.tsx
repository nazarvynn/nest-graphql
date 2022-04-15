import React from "react";

import CreateUserFormV1 from "./CreateUserFormV1";
import UsersTableV1 from "./UsersTableV1";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { UsersV1Query } from "./__generated__/UsersV1Query.graphql";
import { useCreateUserMutation, useRemoveUserMutation } from "./graphql";

const usersQuery = graphql`
  query UsersV1Query {
    users {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;

export default function UsersV1() {
  const usersData = useLazyLoadQuery<UsersV1Query>(usersQuery, {});
  const [createUserMutation] = useCreateUserMutation();
  const [removeUserMutation] = useRemoveUserMutation();

  const createUser = (createUserInput: any) => {
    createUserMutation(createUserInput);
  };
  const editUser = (user: any) => {
    console.log("editUser", user);
  };
  const removeUser = ({ id }: any) => {
    removeUserMutation(+id);
  };

  return (
    <>
      <CreateUserFormV1 onSubmit={createUser} />
      <UsersTableV1
        usersData={usersData}
        onEdit={editUser}
        onRemove={removeUser}
      />
    </>
  );
}
