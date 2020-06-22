import React  from 'react';
import Todo from './components/Todos';
import { useSelector } from 'react-redux'
import styles from './styles.css';
import AddTodo from './components/AddTodo';

function App() {
  const states =  useSelector(state=>state.todos);
  // const currentTodo = useSelector(state=>state.currentTodo);
  console.log(states);
  
  return (
    <div className="App">
      <div className="row text-center">
        <div className="col-md">        
          <div className="font-weight-bold text-center p-3  bg-info text-white">
            <strong>React-Redux CRUD APP</strong>
          </div>
          <div class="p-3 mb-2  text-white"><h1>Todo List</h1></div>       
        </div>
        <div className="row">
          <AddTodo   />
          <div className={styles.tododiv}>        
            <Todo todos = {states} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
