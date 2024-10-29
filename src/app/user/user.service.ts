import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { IUser, IUserCredentials } from './user.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: BehaviorSubject<IUser | null>;

  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject<IUser | null>(null);
  }

  getUser(): Observable<IUser | null> {
    return this.user;
  }

  signIn(credentials: IUserCredentials): Observable<IUser> {
    return this.http
      .post<IUser>('/api/sign-in', credentials)
      .pipe(map((user: IUser) => {
        this.user.next(user);
        return user;
      }));
  }

  signOut() {
    this.user.next(null);
  }
}
