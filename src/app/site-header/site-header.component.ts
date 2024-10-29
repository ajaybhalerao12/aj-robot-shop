import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../user/user.service';
import { IUser } from '../user/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
})
export class SiteHeaderComponent implements OnInit {
  user: IUser | null = null;
  showSignOutMenu: any;
  constructor(private userSvc: UserService) {}

  ngOnInit(): void {
    this.userSvc.getUser().subscribe({
      next: (user) => {
        console.log('User is signed in as ' + user?.email);
        this.user = user;
      },
      error: (err) => {
        console.error('Error getting user', err);
      },
    });
  }

  toggleSignOutMenu() {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  signOut() {
    this.userSvc.signOut();
  }
}
