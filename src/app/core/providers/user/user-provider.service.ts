import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Observable } from 'rxjs';
import { User } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserProviderService {

  constructor(private http: HttpService) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>('/users/all');
  }

  getUser(id: string): Observable<User>{
    return this.http.get<User>(`/users/${id}`);
  }

  addUser(user: User): Observable<User>{
    return this.http.post<User>('/users/register', user);
  }

  updateUser(id: string, user: User): Observable<User>{
    return this.http.patch<User>(`/users/${id}`, user);
  }

  deleteUser(id: string): Observable<User>{
    return this.http.delete<User>(`/users/${id}`);
  }
}
