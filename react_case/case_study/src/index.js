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
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<Content />} />
    <Route path='/service' element={<ListService />} />
    <Route path='/service/create' element={<CreateService />} />
    <Route path='/service/edit' element={<EditService />} />
    <Route path='/customer' element={<ListCustomer />} />
    <Route path='/customer/create' element={<CreateCustomer />} />
    <Route path='/customer/edit' element={<EditCustomer />} />
    <Route path='/contract' element={<ListContract />} />
    <Route path='/contract/create' element={<CreateContract />} />
    <Route path='/contract/edit' element={<EditContract />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
