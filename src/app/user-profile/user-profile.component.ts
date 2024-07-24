// src/app/user-profile/user-profile.component.ts
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser: User;
  isProfileVisible: boolean;
  showEmail: boolean;

  constructor() {
    this.currentUser = new User('John', 'Doe', 'john.doe@example.com');
    this.isProfileVisible = true;
    this.showEmail = false;
  }

  ngOnInit(): void {}

  toggleProfile(): void {
    this.isProfileVisible = !this.isProfileVisible;
  }
}
