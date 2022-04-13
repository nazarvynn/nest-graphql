import React from "react";

import CreateUserForm from "./CreateUserForm";
import UsersTable from "./UsersTable";

export default function Users() {
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
      <UsersTable users={[]} onEdit={editUser} onRemove={removeUser} />
    </>
  );
}
