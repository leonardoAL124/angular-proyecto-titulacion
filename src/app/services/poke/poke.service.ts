import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http: HttpClient) { }

  private API_AVATAR = "https://api.sampleapis.com/avatar/characters";

  getCharacter(): Observable<any> {
    return this.http.get(this.API_AVATAR);
  }

  getCharacterById(id: string): Observable<any> {
    return this.http.get(`${this.API_AVATAR}/${id}`);
  }
}
