import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodayDateService {

  constructor() { }

  getDate() {
    const date = new Date();
    return date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
  }
}
