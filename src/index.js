import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap-icons/font/bootstrap-icons.css"
ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
     <App />
     </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);


