import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private API_USERS = "http://localhost:3000/usuarios";

  getUsers(): Observable<any> {
    return this.http.get(this.API_USERS)
  }

  getUserById(id: string): Observable<any> {
    return this.http.get(`${this.API_USERS}/${id}`)
  }

  postUser(user: JSON): Observable<any> {
    return this.http.post(this.API_USERS, user)
  }

  putUser(user: any): Observable<any> {
    return this.http.put(`${this.API_USERS}/${user.id}`, user)
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.API_USERS}/${id}`)
  }
}
