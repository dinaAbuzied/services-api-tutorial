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
  desc: 'To Do Item 1',
  done : false
}, {
  id: 12,
  desc: 'To Do Item 2',
  done : true
}, {
  id: 13,
  desc: 'To Do Item 3',
  done : false
}, {
  id: 14,
  desc: 'To Do Item 4',
  done : false
}];
