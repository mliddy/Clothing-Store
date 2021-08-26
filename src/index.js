import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux' //Component that gives our app access to the reducers as well as the store
import {store,persistor} from './redux/store'
import {PersistGate} from 'redux-persist/integration/react'

//Provider is the parent of everything so it has access to the whole store
ReactDOM.render(
  <Provider store = {store}>
  <BrowserRouter>
  <React.StrictMode>
    <PersistGate persistor = {persistor}>
    <App />
    </PersistGate>
  </React.StrictMode>,
  </BrowserRouter>,
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
