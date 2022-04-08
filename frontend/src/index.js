import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Navbar } from './components/Navbars';

ReactDOM.render(
  <Provider store = {store}>
  <BrowserRouter >
    <App />
    <Navbar />
  </BrowserRouter>,
  </Provider>,
  document.getElementById('root')
);

