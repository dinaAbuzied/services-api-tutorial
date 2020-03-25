import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private listUrl = 'api/TODOList';

  constructor( private http: HttpClient) { }

  getList() {
    return this.http.get<any[]>(this.listUrl);
  }
}
