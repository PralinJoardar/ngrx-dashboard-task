import { Action } from '@ngrx/store';
import { List } from './../models/list.model';

export const ADD_NEW_TASK = '[TASK] Add';

export class AddNewTask implements Action {
  readonly type = ADD_NEW_TASK;
  constructor(public payload: any) {}
}
