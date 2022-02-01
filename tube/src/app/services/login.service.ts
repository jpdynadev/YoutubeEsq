import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginURL: string = 'http://localhost:5000/'

  constructor(public http: HttpClient) { }


  /*
    Observable ( a type, which you can subscribe to, 
      that will at some point call a function 
      that you passed it with that value returned from that observable)
  */
  login(username: string, password: string): Observable<boolean> {
    return this.http.get<boolean>(this.loginURL + `login?username=${username}&password=${password}`);
  }
}
