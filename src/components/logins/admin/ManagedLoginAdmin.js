import React, { Component } from "react";
import newspaper2 from "../../images/newspaper2.jpg";
import LoginForm from "./FormLogin";
import { convertLegacyProps } from "antd/lib/button/button";
//loading phase for the admin app...
class ManagedLoginAdmin extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div style={{ backgroundImage: `url(${newspaper2})`, background: `url(${newspaper2})no-repeat center center fixed`, backgroundSize: "cover", width: "100%", height: "auto", position: "fixed", top: "0rem", bottom: "0rem" }}>{/* <LoginForm /> */}hey u</div>;
    }
}

export default ManagedLoginAdmin;
