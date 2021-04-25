import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Actividades from './Componentes/Actividades';
import Footer from './Componentes/Footer';



ReactDOM.render(

  <React.StrictMode>

    <Router>
    <App/>

      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Actividades" component={Actividades} />
        <Route path="/Footer" component={Footer} />
        
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
