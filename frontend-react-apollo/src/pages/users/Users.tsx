import React, { useEffect, useState } from "react";

import { User } from "../../models";
import CreateUserForm from "./CreateUserForm";
import UsersTable from "./UsersTable";

export default function Users() {
  const [users, setUsers] = useState([] as User[]);

  useEffect(() => {
    setUsers([
      {
        id: "1",
        name: "name-1",
        email: "email-1",
        createdAt: "createdAt-1",
        updatedAt: "updatedAt-1",
      },
      {
        id: "2",
        name: "name-2",
        email: "email-2",
        createdAt: "createdAt-2",
        updatedAt: "updatedAt-2",
      },
      {
        id: "3",
        name: "name-3",
        email: "email-3",
        createdAt: "createdAt-3",
        updatedAt: "updatedAt-3",
      },
    ]);
  }, []);

  const createUser = ({ name, email }: any) => {
    console.log(name, email);
  };

  return (
    <>
      <CreateUserForm onSubmit={createUser} />
      <UsersTable users={users} />
    </>
  );
}
