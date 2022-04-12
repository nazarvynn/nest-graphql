import React from "react";
import { User } from "../../models";

export default function UsersTable({ users }: { users: User[] }) {
  return (
    <div className="overflow-x-auto border rounded-xl mt-4">
      <table className="table w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>name 1</td>
            <td>email 1</td>
            <td>created 1</td>
            <td>updated 1</td>
            <td>
              <button className="btn btn-info btn-xs mx-2">edit</button>
              <button className="btn btn-error btn-xs mx-2">remove</button>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>name 2</td>
            <td>email 2</td>
            <td>created 2</td>
            <td>updated 2</td>
            <td>
              <button className="btn btn-info btn-xs mx-2">edit</button>
              <button className="btn btn-error btn-xs mx-2">remove</button>
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>name 3</td>
            <td>email 3</td>
            <td>created 3</td>
            <td>updated 3</td>
            <td>
              <button className="btn btn-info btn-xs mx-2">edit</button>
              <button className="btn btn-error btn-xs mx-2">remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
