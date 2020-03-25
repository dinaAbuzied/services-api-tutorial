import { Component, OnInit } from '@angular/core';
import { TodayDateService } from '../services/today-date.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  date: string;

  constructor(private todayDate: TodayDateService) { }

  ngOnInit() {
    this.date = this.todayDate.getDate();
  }

}
