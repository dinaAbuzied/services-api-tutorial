import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  listUrl = 'api/TODOLists';

  constructor( private http: HttpClient) { }

  getList() {
    return this.http.get<any[]>(this.listUrl);
  }

  addItem(item) {
    return this.http.post<any>(this.listUrl, item);
  }

  updateHero(item) {
    return this.http.put(this.listUrl, item);
  }

  removeItem(id: number) {
    const url = `${this.listUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
