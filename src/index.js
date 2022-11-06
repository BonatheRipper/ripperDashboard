import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App'
import { ContextProvider } from './context/contextProvider';
import './index.css'



ReactDOM.render(
<ContextProvider>
    <App />
</ContextProvider>, 
document.getElementById('root'));

