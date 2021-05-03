import { List } from '../models/list.model';
import * as AddNewListAction from './../actions/addList.action';
import * as AddNewTaskAction from './../actions/addTask.action';

const initialState: List = {
  listTitle: 'Demo List',
  tasks: ['Demo Task1', 'Demo Task2'],
};

export function addNewListReducer(
  state: List[] = [initialState],
  action: AddNewListAction.AddNewList
) {
  switch (action.type) {
    case AddNewListAction.ADD_NEW_LIST:
      return [...state, action.payload];
    default:
      return state;
  }
}

export function addNewTaskReducer(
  state: List[] = [initialState],
  action: AddNewTaskAction.AddNewTask
) {
  switch (action.type) {
    case AddNewTaskAction.ADD_NEW_TASK:
      return [
        ...state,
        state[action.payload.index].tasks.push(action.payload.taskData),
      ];
  }
}
