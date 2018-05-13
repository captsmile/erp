import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from "./view/Login";
import Home from "./view/Home";
import Header from "./view/Header";
import Footer from "./view/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Router>
        <div className="container">
            <Header/>
            <Route exact path="/" component={App}/>
            <Route exact path="/auth" component={Login}/>
            <Route exact path="/home" component={Home}/>
            <Footer/>
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
