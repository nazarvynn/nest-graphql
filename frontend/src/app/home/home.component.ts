import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';

import { GET_ALL_USERS } from './gql/get-all-users';

interface User {
  email: string;
  name: string;
}

interface UserRecord {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  createUserForm!: FormGroup;
  editUserForm!: FormGroup;
  // users!: UserRecord[];
  users$?: Observable<UserRecord[]>;
  showEdit = false;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.initCreateUserForm();
    this.initUpdateUserForm();
    this.queryUsers();
  }

  initCreateUserForm(): void {
    this.createUserForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
    });
  }

  queryUsers(): void {
    this.users$ = this.apollo
      .watchQuery<{ users: UserRecord[] }>({ query: GET_ALL_USERS })
      .valueChanges.pipe(map(({ data }) => data.users));
  }

  createUser(): void {
    const userParams = this.createUserForm?.value;
    console.log(userParams);
  }

  showUpdateUser(user: UserRecord): void {
    this.showEdit = true;
    this.editUserForm.patchValue(user);
  }

  initUpdateUserForm(): void {
    this.editUserForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
    });
  }

  updateUser(): void {
    const userParams = this.editUserForm?.value;
    console.log('update', userParams);
    // this.showEdit = false;
  }

  removeUser(user: UserRecord): void {
    console.log('remove', user);
  }
}
