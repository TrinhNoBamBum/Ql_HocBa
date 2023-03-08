import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import allReducer from './store/reducers/index'
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { createStore } from 'redux';


const container = document.getElementById('root')!;
const root = createRoot(container);
const store=createStore(allReducer)


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
