import React from "react";
import { createBrowserHistory } from "history";
import "antd/dist/antd.css";
//import 'antd/dist/antd.css';
//import ManageLoginPages from "./components/logins";
import Routes, { history } from "./components/Router/Router";
import "./App.less";
import "../src/components/css/layout.css";

import { Router } from "react-router-dom";
//const history = createBrowserHistory();
function App() {
    return (
        <Router history={history}>
            <main className="App">
                <Routes />
            </main>
        </Router>
    );
}

export default App;
