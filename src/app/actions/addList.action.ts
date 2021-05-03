import { Action } from '@ngrx/store';
import { List } from './../models/list.model';

export const ADD_NEW_LIST = '[LIST] Add';

export class AddNewList implements Action {
  readonly type = ADD_NEW_LIST;
  constructor(public payload: List) {}
}

export type Actions = AddNewList