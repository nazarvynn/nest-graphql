import React from "react";

import CreateUserFormV1 from "./CreateUserFormV1";
import UsersTableV1 from "./UsersTableV1";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { UsersV1Query } from "./__generated__/UsersV1Query.graphql";

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

  const createUser = (createUser: any) => {
    console.log("createUser", createUser);
  };
  const editUser = (user: any) => {
    console.log("editUser", user);
  };
  const removeUser = (user: any) => {
    console.log("removeUser", user);
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
