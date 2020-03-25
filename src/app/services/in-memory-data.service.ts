import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return { TODOList };
  }

  genId(list): number {
    return list.length > 0 ? Math.max(...list.map(item => item.id)) + 1 : 11;
  }
}

const TODOList = [{
  id: 11,
  desc: 'Study Angular 📚',
  done : false
}, {
  id: 12,
  desc: 'Drink coffee ☕',
  done : true
}, {
  id: 13,
  desc: 'Work work work (maybe 🤔)',
  done : false
}, {
  id: 14,
  desc: 'Netflix and chill 🍿',
  done : false
}];
