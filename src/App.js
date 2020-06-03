import React from 'react';
import Todo from './components/Todo';

function App() {
  return (
    
    <div className="App">
      <div className="row">
        <div className="col-md-12">        
          <div className="font-weight-bold text-center p-3  bg-info text-white"><strong>React-Redux CRUD APP</strong></div>
            <h1> Hello world </h1>
            <Todo />
          </div>
      </div>
    </div>
  );
}

export default App;
