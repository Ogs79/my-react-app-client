import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from './store/UserStore';
import GroupStore from './store/GroupStore';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    group: new GroupStore(),
  }}>
    <App />

  </Context.Provider>,
  
  document.getElementById('root')
);