import { useMutation } from "react-relay";
import { useCallback } from "react";
import {
  ConnectionHandler,
  RecordSourceSelectorProxy,
  RecordProxy,
} from "relay-runtime";
const graphql = require("babel-plugin-relay/macro");

const mutation = graphql`
  mutation useCreateUserMutation($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;

function sharedUpdater(
  store: RecordSourceSelectorProxy,
  userId: string,
  newEdge: RecordProxy
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
  ConnectionHandler.insertEdgeAfter(connection, newEdge);
}

export default function useCreateUserMutation() {
  const [commit] = useMutation(mutation);
  return [
    useCallback(
      (createUserInput: { name: string; email: string }) => {
        return commit({
          variables: { createUserInput },
          // updater: (store: RecordSourceSelectorProxy) => {
          //   const payload = store.getRootField("createUser");
          //   const newEdge = payload?.getLinkedRecord("users");
          //   const newEdge = payload.getLinkedRecord("user");
          //   if (!newEdge) {
          //     return;
          //   }
          //   sharedUpdater(store, userId, newEdge);
          // },
        });
      },
      [commit]
    ),
  ];
}
