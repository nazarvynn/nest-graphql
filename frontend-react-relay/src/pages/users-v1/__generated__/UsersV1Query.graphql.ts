/**
 * @generated SignedSource<<058b996b7065e393f0af4c32bc3d3368>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type UsersV1Query$variables = {};
export type UsersV1Query$data = {
  readonly users: ReadonlyArray<{
    readonly id: string;
    readonly name: string | null;
    readonly email: string;
    readonly createdAt: any;
    readonly updatedAt: any;
  }>;
};
export type UsersV1Query = {
  variables: UsersV1Query$variables;
  response: UsersV1Query$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "users",
    "plural": true,
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UsersV1Query",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UsersV1Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "287e27ef3fcf534e4976477ade263ec0",
    "id": null,
    "metadata": {},
    "name": "UsersV1Query",
    "operationKind": "query",
    "text": "query UsersV1Query {\n  users {\n    id\n    name\n    email\n    createdAt\n    updatedAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "af3ef53c8a5917171215c7b4bf2416d3";

export default node;
