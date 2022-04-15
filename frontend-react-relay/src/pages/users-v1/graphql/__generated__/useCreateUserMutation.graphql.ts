/**
 * @generated SignedSource<<65e9878cb5237950120ee548e72f91ba>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateUserInput = {
  email: string;
  name?: string | null;
};
export type useCreateUserMutation$variables = {
  createUserInput: CreateUserInput;
};
export type useCreateUserMutation$data = {
  readonly createUser: {
    readonly id: string;
    readonly name: string | null;
    readonly email: string;
    readonly createdAt: any;
    readonly updatedAt: any;
  };
};
export type useCreateUserMutation = {
  variables: useCreateUserMutation$variables;
  response: useCreateUserMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "createUserInput"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "createUserInput",
        "variableName": "createUserInput"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "createUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "updatedAt",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useCreateUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useCreateUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e293f3df35902b6734ddb02d19b0643c",
    "id": null,
    "metadata": {},
    "name": "useCreateUserMutation",
    "operationKind": "mutation",
    "text": "mutation useCreateUserMutation(\n  $createUserInput: CreateUserInput!\n) {\n  createUser(createUserInput: $createUserInput) {\n    id\n    name\n    email\n    createdAt\n    updatedAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "0c33f76fce0f2b8548e7f68d8f931acc";

export default node;
