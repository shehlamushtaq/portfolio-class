import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main1 from './pages/Main1';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Main/> */}
{/* <Main1/> */}
<Home/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
