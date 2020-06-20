
const initialTodos =[
  {
    id:1,
    'title':'Dress up'
  },
  {
    id:2,
    'title':'Go to the super shop'
  },
  {
    id:3,
    'title':'Buy some Groceries'
  },
  {
    id:4,
    'title':'Pay internet bill'
  }

]


// this is the ES2015 syntax for setting a default value for state in the function parameters
function todoReducer(state = initialTodos, action) {
  switch(action.type) {
    case "ADD_TODO":
      return [...state, {
        id:5,
        'title':action.payload
      }];
    case 'DELETE_TODO':
      return [...state.filter(state=>state.id!==action.payload)];
    default:
       return state;
  }

}

export default todoReducer;