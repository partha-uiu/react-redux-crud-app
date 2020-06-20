import React from 'react';
import TodoList from './TodoList';
import {useDispatch} from 'react-redux';
import {addTodo, deleteTodo} from '../redux/actions/todo';
import  '../styles.css';

 function Todos(props) {

    const dispatch = useDispatch();
    
    const submitForm = e => {

        if (e.target.todo.value.length == 0)
        { 
            alert("Please enter an input");  	
            return false; 
        }  	        

        e.preventDefault();
        dispatch(addTodo(e.target.todo.value))
        e.target.todo.value = "";
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))

    };
        
    return (
        <div className="tododiv">
            <form class="form-inline mb-5" onSubmit={submitForm}>
                <input type="text" name="todo" class="form-control" />
                <input type="submit" value="Add" class="btn btn-primary" />
            </form> 
            <ul className=" list-group">
                {props.todos.map(todo => <li class="list-group-item"> <TodoList key={todo.id} title={todo.title} />
                <a onClick ={() =>handleDelete(todo.id)}><i class="fas fa-trash"></i></a></li>)}      
            </ul>
        </div>
    )
}

export default Todos;
