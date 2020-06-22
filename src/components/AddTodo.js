import React from 'react'
import {useDispatch} from 'react-redux';
import {addTodo, editTodo} from '../redux/actions/todo';
import  '../styles.css';


export default function AddTodo() {
    const dispatch = useDispatch();
    
    const submitForm = e => {
    
        if (e.target.todo.value.length === 0)
        { 
            alert("Please enter an input");  	
            return false; 
        }  	        
    
        e.preventDefault();
        dispatch(addTodo(e.target.todo.value))
        e.target.todo.value = "";
    };


    return (
        <div>
            <form class="form-inline mb-5" onSubmit={submitForm}>
                <input type="text" name="todo" class="form-control" />
                <input type="submit" value="Add" class="btn btn-primary" />
            </form> 
        </div>
    )
}
