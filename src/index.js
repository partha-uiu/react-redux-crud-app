import React, {useSelector} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoReducer from './redux/reducers/todo';



const store = createStore(todoReducer);

const states = store.getState();


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App states = {states} />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
