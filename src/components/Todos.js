import React from 'react';
import TodoList from './TodoList';
import {useDispatch} from 'react-redux';
import {addTodo, deleteTodo, editTodo} from '../redux/actions/todo';
import  '../styles.css';

 function Todos(props) {
   console.log(props);
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

    const handleEdit = (e, id) => {
        dispatch(editTodo(id))
        e.preventDefault();
        dispatch(editTodo(e.target.todo.value))
        e.target.todo.value = "";
    };
        
    return (
        <div className="tododiv">
            <ul className = "list-group">
                {props.todos.map(todo => <li class="list-group-item"> <TodoList key={todo.id} todo={todo} />
               </li>)}      
            </ul>
        </div>
    )
}

export default Todos;
