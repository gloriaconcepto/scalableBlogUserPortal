import React, { Component } from "react";
import ManagedLoginAdmin from "./admin/ManagedLoginAdmin";
import './Login.scss';
class ManageLoginPages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: null,
            error: null,
            userDetails: null,
        };
    }
    render() {
        return <div>{true ? <ManagedLoginAdmin /> : null}</div>;
    }
}

export default ManageLoginPages;
