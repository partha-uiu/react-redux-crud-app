import React from 'react';
import TodoList from './TodoList';
import {useDispatch} from 'react-redux';
import {addTodo, deleteTodo} from '../redux/actions/todo';

 function Todos(props) {

    const dispatch = useDispatch();
    
    const submitForm = e => {
        e.preventDefault();
        dispatch(addTodo(e.target.todo.value))
        
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))

    };
        
    return (
        <div>
            <form class="form-inline" onSubmit={submitForm}>
                <input type="text" name="todo" class="form-control" />
                <input type="submit" value="Add" class="btn btn-primary" />
            </form> 
            <ul className="list-group">
                {props.todos.map(todo => <li class="list-group-item"> <TodoList key={todo.id} title={todo.title} />
                <button onClick ={() =>handleDelete(todo.id)}><i class="fas fa-trash"></i></button></li>)}      
            </ul>
        </div>
    )
}

export default Todos;
