import React from "react";
import { createBrowserHistory } from "history";
import "antd/dist/antd.css";
//import 'antd/dist/antd.css';
//import ManageLoginPages from "./components/logins";
import Routes, { history } from "./components/Router/Router";
import "./App.less";
import "../src/components/css/layout.css";

import { BrowserRouter } from "react-router-dom";
//const history = createBrowserHistory();
function App() {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    );
}

export default App;
