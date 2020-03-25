import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  listUrl = 'api/TODOList';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient) { }

  getList() {
    return this.http.get<any[]>(this.listUrl);
  }

  removeItem(id: number) {
    const url = `${this.listUrl}/${id}`;
    return this.http.delete<any[]>(url, this.httpOptions);
  }
}
