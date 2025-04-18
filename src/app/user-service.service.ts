import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { Users } from './types/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  tableShown = true;
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }

  addUser(user: Partial<Users>): Observable<Users> {
    return this.http.post<Users>(this.apiUrl, user);
  }

  setTableVisible(visible: boolean): void {
    this.tableShown = visible;
  }

  isTableVisible(): boolean {
    return this.tableShown;
  }
}
