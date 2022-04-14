import React from "react";

import CreateUserForm from "./CreateUserForm";
import UsersTable from "./UsersTable";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { UsersQuery } from "./__generated__/UsersQuery.graphql";

const usersQuery = graphql`
  query UsersQuery {
    users {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;

export default function Users() {
  const usersData = useLazyLoadQuery<UsersQuery>(usersQuery, {});

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
      <CreateUserForm onSubmit={createUser} />
      <UsersTable
        usersData={usersData}
        onEdit={editUser}
        onRemove={removeUser}
      />
    </>
  );
}
