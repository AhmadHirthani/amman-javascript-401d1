import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';

function Main() {
  return (
    <App />
  )
}

const root = document.getElementById('root');
ReactDOM.render(<Main />, root);