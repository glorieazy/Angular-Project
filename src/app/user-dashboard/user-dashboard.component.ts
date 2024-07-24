import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})

export class UserDashboardComponent implements OnInit{
  currentUser: User;

  constructor() {
    this.currentUser = new User('JohnDoe', 25, 'john.doe@gmail.com')
  }

  ngOnInit(): void {}

  // create a new method to update the email
  updateEmail(): void {
    const newEmail = prompt('Enter new email:', this.currentUser.email);
    if (newEmail !== null && newEmail.trim() !== '') {
      this.currentUser.email = newEmail;
    }
  }
}


export class User {
  public constructor(
  public username: string,
  public age: number,
  public email: string
  ) {}
}
