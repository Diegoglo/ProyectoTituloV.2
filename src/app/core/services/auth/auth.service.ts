import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../../model/auth.model';
import { HttpService } from '../http/http.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticated: boolean;
  private currentUser: any;

  constructor(private httpService: HttpService, private router: Router) {
    this.authenticated = false;
    this.currentUser = null;

    if (sessionStorage.getItem('credentials')){
      this.authenticated = true;
    }
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  login(auth: { email: string, password: string }): Observable<Auth> {
    return this.httpService.post('/auth/login', {
      email: auth.email,
      password: auth.password
    })
    .pipe(
      tap((data: any) => {
          this.currentUser = { user: data.authenticated, entity: data.entity };
          this.authenticated = true;
          this.router.navigate(['dashboard/auxiliante']);
          // throw new Error('Access denied!');
      })
    );
  }

  public logout(): void{
    this.currentUser = null;
    this.authenticated = false;
    sessionStorage.removeItem('credentials');
    this.router.navigate(['admin/login']);
  }

}