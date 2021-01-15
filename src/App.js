import React from "react";
import { createBrowserHistory } from "history";
import "antd/dist/antd.css";
//import 'antd/dist/antd.css';
//import ManageLoginPages from "./components/logins";
import Routes from "./components/Router/Router";
import "./App.less";
import "../src/components/css/layout.css";
export const history = createBrowserHistory();

function App() {
    return (
        <div className="App">
            <Routes />
        </div>
    );
}

export default App;
