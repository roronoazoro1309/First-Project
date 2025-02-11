import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  //   <h1>Header</h1> 
  //   <App/>
  //   <h1>Footer</h1> 
  // </React.StrictMode>
);

