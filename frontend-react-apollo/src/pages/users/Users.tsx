import React from "react";
import { useMutation, useQuery } from "@apollo/client";

import {
  CREATE_USER,
  REMOVE_USER,
  UPDATE_USER,
  USER,
  USERS,
} from "../../graphql";
import { User, UserParams } from "../../models";

import CreateUserForm from "./CreateUserForm";
import UsersTable from "./UsersTable";

export default function Users() {
  const userQuery = useQuery(USERS);
  const [createUserMutation] = useMutation(CREATE_USER);
  const [updateUserMutation] = useMutation(UPDATE_USER);
  const [removeUserMutation] = useMutation(REMOVE_USER);

  const createUser = (createUser: UserParams) => {
    createUserMutation({
      variables: { createUser },
      update: (cache, { data }) => {
        const list = cache.readQuery<{ users: User[] }>({ query: USERS });
        cache.writeQuery({
          query: USERS,
          data: { users: [...list!.users, data?.createUser] },
        });
      },
    });
  };
  const editUser = ({ name, email, ...user }: User) => {
    const id = +user.id;
    updateUserMutation({
      variables: { updateUser: { id, name, email } },
      update: (cache, { data }) => {
        const user = cache.readQuery<{ user: User }>({
          query: USER,
          variables: { id },
        });
        cache.writeQuery({
          query: USER,
          data: { user: { ...user, ...data?.updateUser } },
        });
      },
    });
  };
  const removeUser = (user: User) => {
    const id = +user.id;
    removeUserMutation({
      variables: { id },
      update: (cache) => {
        const normalizedId = cache.identify({ id, __typename: "User" });
        cache.evict({ id: normalizedId });
        cache.gc();
      },
    });
  };

  return (
    <>
      <CreateUserForm onSubmit={createUser} />
      <UsersTable
        users={userQuery?.data?.users}
        onEdit={editUser}
        onRemove={removeUser}
      />
    </>
  );
}
