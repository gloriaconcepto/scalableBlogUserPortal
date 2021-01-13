import React from "react";
import { createBrowserHistory } from 'history';
import "antd/dist/antd.css";
//import 'antd/dist/antd.css';
//import ManageLoginPages from "./components/logins";
import Routes from "./components/Router/Router";
import { Router,BrowserRouter } from "react-router-dom";

// import { Button } from "antd";
import "./App.less";
export const history = createBrowserHistory();

function App() {
    
    return (
        <BrowserRouter history={history}>
            <div className="App">
                <Routes />
            </div>
        </BrowserRouter>
    );
}

export default App;



  
   