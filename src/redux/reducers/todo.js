
const { uuid } = require('uuidv4');

const initialTodos = {
  todos:[
    {
      id:uuid(),
      'title':'Dress up'
    },
    {
      id:uuid(),
      title:'Go to the super shop'
    },
    {
      id:uuid(),
      title:'Buy some Groceries'
    },
    {
      id:uuid(),
      title:'Pay internet bill'
    }
  ], 

}

// this is the ES2015 syntax for setting a default value for state in the function parameters
function todoReducer(state = initialTodos, action) {

  switch(action.type) {
    
    case "ADD_TODO":
      return { ...state, 
        todos: [ ...state.todos, { "id":uuid(), "title": action.payload } ] };
    case 'DELETE_TODO':
      return  { ...state, 
        todos: [...state.todos.filter(state=>state.id!==action.payload)]
      };      
    case 'EDIT_TODO':
      return  { ...state, 
        todos: [...state.todos.filter(state=>state.id===action.payload)]
      };
    default:
       return state;
  }

}

export default todoReducer;