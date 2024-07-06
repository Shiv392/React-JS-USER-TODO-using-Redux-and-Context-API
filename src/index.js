import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
// import {Provider} from 'react-redux';
// import { store } from './Todoapp_redux/Store/Store';
import { TodoListProvider } from './Todoapp_contextapi/todocontext/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Provider store={store}>
  //   <App />
  //   </Provider>
  // </React.StrictMode>

  <React.StrictMode>
  <TodoListProvider>
  <App />
  </TodoListProvider>

</React.StrictMode>
);

