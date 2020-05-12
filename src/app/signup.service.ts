import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { filter } from 'rxjs/operators';

@Injectable()
export class SignupService {
  constructor(private http: HttpClient) {}

  checkEmailNotTaken(email: string) {
    return this.http
      .get('assets/users.json')
      .pipe(map(response => console.log(response)))
      .pipe(map(users => users.filter(user => user.email === email)))
      .pipe(map(users => !users.length));
  }
}