import { Component, OnInit } from '@angular/core';
import { TodayDateService } from '../services/today-date.service';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  date: string;
  list = [];

  constructor(private todayDate: TodayDateService, private todo: TodoService) { }

  ngOnInit() {
    this.date = this.todayDate.getDate();
    this.todo.getList().subscribe(data => {
      this.list = data;
    });
  }

  deleteItem(id: number) {
    this.todo.removeItem(id).subscribe(() => {
      console.log('item', id, 'deleted');
      this.list = this.list.filter(item => item.id !== id);
    });
  }
}
