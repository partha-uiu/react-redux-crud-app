import * as types from "./types";

export function addTodo(todo) {
  return {
    type: types.ADD_TODO,
    payload: todo
  }
}

 export function deleteTodo(id) {
  return {
    type: types.DELETE_TODO,
    payload: id
  }
}

 export function editTodo(id) {
  return {
    type: types.EDIT_TODO,
    payload: id
  }
}

