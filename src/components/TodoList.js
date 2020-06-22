import React from 'react'

import {useDispatch} from 'react-redux';
import {deleteTodo, editTodo} from '../redux/actions/todo';
import  '../styles.css';


export default function TodoList(props) {

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))

    };

    const handleEdit = (id) => {
        dispatch(editTodo(id))

    };

    return (
        <div>
            <span className="d-inline-block p-r-5">{props.todo.title}</span> <a onClick ={() =>handleDelete(props.todo.id)}><i class="fas fa-trash"></i></a>
            <a onClick ={() =>handleEdit(props.todo.id)}><i style={{paddingLeft: "10px"}} class="far fa-edit"></i></a>
        </div>
    )
}
