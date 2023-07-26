import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ListContract from './components/ListContract';
import EditContract from './components/EditContract';
import CreateContract from './components/CreateContract';
import ListCustomer from './components/ListCustomer';
import EditCustomer from './components/EditCustomer';
import CreateCustomer from './components/CreateCustomer';
import ListService from './components/ListService';
import CreateService from './components/CreateService';
import EditService from './components/EditService';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListCustomer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
