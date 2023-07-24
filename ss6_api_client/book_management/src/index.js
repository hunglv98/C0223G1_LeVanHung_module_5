import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BookManagement from './components/BookManagement';
import CreateBook from './components/CreateBook';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EditBook from './components/EditBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes >
      <Route path='/' element={<BookManagement></BookManagement>}></Route>
      <Route path='/edit/:id' element={<EditBook />}> </Route>
      <Route path='/create' element={<CreateBook />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
