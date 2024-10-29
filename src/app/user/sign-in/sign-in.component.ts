import { Component } from '@angular/core';
import { IUserCredentials } from '../user.model';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  credentials: IUserCredentials = { email: '', password: '' };
  signInError: boolean = false;
  constructor(private userSvc:UserService, private router: Router) {}

  signIn() {
    this.signInError = false;
    this.userSvc.signIn(this.credentials).subscribe({
      next: (user) => {
        console.log(`User ${user.email} signed in`);
        this.router.navigate(['/catalog']);
      },
      error: (err) => { this.signInError = true},
    })
  }
}
