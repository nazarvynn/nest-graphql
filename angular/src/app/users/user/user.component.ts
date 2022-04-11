import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Observable, Subscription } from 'rxjs';
import { User } from '../models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  user$!: Subscription;
  user!: User;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId')!;
    this.queryUser(userId);
  }

  queryUser(userId: string): void {
    this.user$ = this.userService.queryUser(+userId).subscribe(({ user, loading }) => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.user$.unsubscribe();
  }
}
