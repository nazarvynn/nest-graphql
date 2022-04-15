import { useMutation } from "react-relay";
import { useCallback } from "react";
import { ConnectionHandler, RecordSourceSelectorProxy } from "relay-runtime";

const graphql = require("babel-plugin-relay/macro");

const mutation = graphql`
  mutation useRemoveUserMutation($id: Int!) {
    removeUser(id: $id) {
      name
    }
  }
`;

function sharedUpdater(
  store: RecordSourceSelectorProxy,
  userId: string,
  deletedID: string
) {
  const userProxy = store.get(userId);
  if (!userProxy) {
    return;
  }
  const connection = ConnectionHandler.getConnection(
    userProxy,
    "TodoList_todos"
  );
  if (!connection) {
    return;
  }
  ConnectionHandler.deleteNode(connection, deletedID);
}

export default function useRemoveUserMutation() {
  const [commit] = useMutation(mutation);
  return [
    useCallback(
      (id: number) => {
        return commit({
          variables: { id },
          //   updater: (store: RecordSourceSelectorProxy) => {
          //     const payload = store.getRootField("removeTodo");
          //     if (!payload) {
          //       return;
          //     }
          //     const deletedTodoId = payload.getValue("deletedTodoId");
          //
          //     if (typeof deletedTodoId !== "string") {
          //       throw new Error(
          //         `Expected removeTodo.deletedTodoId to be string, but got: ${typeof deletedTodoId}`
          //       );
          //     }
          //
          //     sharedUpdater(store, userId, deletedTodoId);
          //   },
        });
      },
      [commit]
    ),
  ];
}
