import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {User} from './user';
import {mockUser} from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = mockUser;

  constructor(private http: HttpClient) {
  }

  private usersUrl = 'api/users';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUser(): Observable<User> {
    return of(this.user);
  }

  // getUser(id: number): Observable<User> {
  //   const url = `${this.usersUrl}/${id}`;
  //   return this.http.get<User>(url);
  // }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);
  }

  updateUser(user: User): Observable<User> {
    return;
  }
}
