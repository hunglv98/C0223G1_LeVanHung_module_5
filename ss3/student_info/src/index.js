import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StudentInfoComponent from './components/StudentInfoComponent';
import "bootstrap/dist/css/bootstrap.css";



const students = [
  {
      id: "1",
      name: "Hưng",
      age: "30",
      address: "vietnam"
  },
  {
      id: "2",
      name: "Tài",
      age: "22",
      address: "vietnam"
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <StudentInfoComponent list={students} />
);
