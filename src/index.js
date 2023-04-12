import React from 'react';
import ReactDOM from 'react-dom/client';
import {CartProvider} from './context/cartContext'
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <App />
      </CartProvider>  
    </Router>
  </React.StrictMode>
);