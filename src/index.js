import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Users } from './components/context/Users';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <Users>
        <App /> 
    </Users>
        
);
 
