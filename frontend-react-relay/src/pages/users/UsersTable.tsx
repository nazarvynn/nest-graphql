import React from "react";

export default function UsersTable({
  users,
  onEdit,
  onRemove,
}: {
  users: any[];
  onEdit?: any;
  onRemove?: any;
}) {
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
            <th />
          </tr>
        </thead>
        <tbody>
          {users?.map(({ __typename, ...user }: any) => (
            <tr key={user.id}>
              {Object.entries(user).map(([_, v], i) => (
                <td key={i}>{v as any}</td>
              ))}
              <td>
                <button
                  className="btn btn-info btn-xs mx-2"
                  onClick={onEdit.bind(null, user)}
                >
                  edit
                </button>
                <button
                  className="btn btn-error btn-xs mx-2"
                  onClick={onRemove.bind(null, user)}
                >
                  remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
