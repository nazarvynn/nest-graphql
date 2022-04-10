import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { UserService } from './user.service';
import { User } from './models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  createUserForm!: FormGroup;
  editUserForm!: FormGroup;
  users$?: Observable<User[]>;
  showEdit = false;

  constructor(private userService: UserService) {}

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
    this.users$ = this.userService.queryUsers();
  }

  createUser(): void {
    if (this.createUserForm.valid) {
      const userParams = this.createUserForm?.value;
      this.userService.createUser(userParams).subscribe();
    }
  }

  showUpdateUser(user: User): void {
    this.showEdit = true;
    this.editUserForm.patchValue(user);
  }

  initUpdateUserForm(): void {
    this.editUserForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
    });
  }

  updateUser(): void {
    if (this.editUserForm.valid) {
      const { id, ...userParams } = this.editUserForm?.value;
      this.userService.updateUser(+id, userParams).subscribe(() => {
        this.showEdit = false;
      });
    }
  }

  removeUser({ id }: User): void {
    this.userService.removeUser(+id).subscribe();
  }
}
