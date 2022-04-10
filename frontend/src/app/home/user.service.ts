import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';

import { CREATE_USER, REMOVE_USER, UPDATE_USER, USER, USERS } from './graphql';
import { User, UserParams } from './models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apollo: Apollo) {}

  queryUsers(): Observable<User[]> {
    return this.apollo
      .watchQuery<{ users: User[] }>({
        query: USERS,
      })
      .valueChanges.pipe(map(({ data }) => data?.users));
  }

  queryUser(id: number): Observable<{ user: User; loading: boolean }> {
    return this.apollo
      .watchQuery<{ user: User }>({
        query: USER,
        variables: { id },
      })
      .valueChanges.pipe(
        map(({ data, loading }) => ({
          user: data?.user,
          loading,
        })),
      );
  }

  createUser(userParams: UserParams): Observable<User | undefined> {
    return this.apollo
      .mutate<{ createUser: User }>({
        mutation: CREATE_USER,
        variables: {
          createUser: { ...userParams },
        },
        update: (cache, { data }) => {
          const list = cache.readQuery<{ users: User[] }>({ query: USERS });
          cache.writeQuery({
            query: USERS,
            data: { users: [...list!.users, data?.createUser] },
          });
        },
      })
      .pipe(map(({ data }) => data?.createUser));
  }

  updateUser(id: number, userParams: UserParams): Observable<User | undefined> {
    return this.apollo
      .mutate<{ updateUser: User }>({
        mutation: UPDATE_USER,
        variables: {
          updateUser: { id, ...userParams },
        },
        update: (cache, { data }) => {
          const user = cache.readQuery<{ user: User }>({ query: USER, variables: { id } });
          cache.writeQuery({
            query: USER,
            data: { user: { ...user, ...data?.updateUser } },
          });
        },
      })
      .pipe(map(({ data }) => data?.updateUser));
  }

  removeUser(id: number): Observable<User | undefined> {
    return this.apollo
      .mutate<{ removeUser: User }>({
        mutation: REMOVE_USER,
        variables: { id },
        update: (cache) => {
          const normalizedId = cache.identify({ id, __typename: 'User' });
          cache.evict({ id: normalizedId });
          cache.gc();
        },
      })
      .pipe(map(({ data }) => data?.removeUser));
  }
}
