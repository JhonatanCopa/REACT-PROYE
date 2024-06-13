import React from 'react';
import ReactDOM from 'react-dom/client';
import Hola from './Saludo';
import Dos from './Dos';
import Button from './Button';
import Inicio from './Inicio';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Inicio campa="CAMAPANA 1" imgcampa="maternidad.jpeg" altTextt="tateta" />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)) --> <App />  -->import './index.css';  -->import App from './App'; --><Button />
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// <Hola nombre="Juan" pais="Peru" uni="San Marcos" img="pastillas.png" />
// <Dos tema="MATERIAS" uno="Matematicas" dos="Programacion" tres="Estadistica" cuatro="lenguaje" />
reportWebVitals();
