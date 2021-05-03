import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import * as AddNewListAction from './../actions/addList.action';
import * as AddNewTaskAction from './../actions/addTask.action';
import { Observable } from 'rxjs';
import { List } from '../models/list.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  listData: any;
  taskData: any;
  myListArray: Observable<List[]>;
  currentListIndex: number;

  constructor(private store: Store<AppState>) {
    this.myListArray = store.select('list');
    console.log('listArray', this.myListArray);
  }

  ngOnInit(): void {}
  addNewList() {
    this.listData = prompt('Enter List Name :');
    this.store.dispatch(
      new AddNewListAction.AddNewList({ listTitle: this.listData, tasks: [] })
    );
  }
  getList(i: number) {
    console.log('index is', i);
    this.currentListIndex = i;
  }
  addTask() {
    this.taskData = prompt('Enter Task :');
    this.store.dispatch(
      new AddNewTaskAction.AddNewTask({
        index: this.currentListIndex,
        taskData: this.taskData,
      })
    );
  }
}
