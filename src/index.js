import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/jquery/dist/jquery.js'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import NetflixIndexComponent from "./app.js"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>

        <NetflixIndexComponent />

    </React.StrictMode>

);


