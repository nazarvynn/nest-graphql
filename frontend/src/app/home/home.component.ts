import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  users!: UserRecord[];
  showEdit = false;

  constructor() {}

  ngOnInit(): void {
    this.initCreateUserForm();
    this.initUpdateUserForm();
    this.loadUsers();
  }

  initCreateUserForm(): void {
    this.createUserForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
    });
  }

  createUser(): void {
    const userParams = this.createUserForm?.value;
    console.log(userParams);
  }

  loadUsers(): void {
    this.users = [
      {
        id: '1',
        name: 'user-1',
        email: 'email-1',
        createdAt: 'createdAt-1',
        updatedAt: 'updatedAt-1',
      },
      {
        id: '2',
        name: 'user-2',
        email: 'email-2',
        createdAt: 'createdAt-2',
        updatedAt: 'updatedAt-2',
      },
      {
        id: '3',
        name: 'user-3',
        email: 'email-3',
        createdAt: 'createdAt-3',
        updatedAt: 'updatedAt-3',
      },
      {
        id: '4',
        name: 'user-4',
        email: 'email-4',
        createdAt: 'createdAt-4',
        updatedAt: 'updatedAt-4',
      },
    ];
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
