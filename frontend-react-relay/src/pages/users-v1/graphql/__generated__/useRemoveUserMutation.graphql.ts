/**
 * @generated SignedSource<<3195a896b51e23e2fe96215f47193096>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useRemoveUserMutation$variables = {
  id: number;
};
export type useRemoveUserMutation$data = {
  readonly removeUser: {
    readonly name: string | null;
  };
};
export type useRemoveUserMutation = {
  variables: useRemoveUserMutation$variables;
  response: useRemoveUserMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useRemoveUserMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "removeUser",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useRemoveUserMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "removeUser",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5427ac610d06f19bfdec671e488249e5",
    "id": null,
    "metadata": {},
    "name": "useRemoveUserMutation",
    "operationKind": "mutation",
    "text": "mutation useRemoveUserMutation(\n  $id: Int!\n) {\n  removeUser(id: $id) {\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "81f587797f8966e61a2e4724a1ecad48";

export default node;
