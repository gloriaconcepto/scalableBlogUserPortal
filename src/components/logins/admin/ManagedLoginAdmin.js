import React, { Component } from "react";
//import newspaper2 from "../../images/newspaper2.jpg";
import LoginForm from "./FormLogin";
import { Button } from "antd";
import { convertLegacyProps } from "antd/lib/button/button";
import { NavLink, withRouter } from "react-router-dom";
import { SIGNUPPAGE } from "../../../constants/routes/constRoutes";
//loading phase for the admin app...
class ManagedLoginAdmin extends Component {
    constructor(props) {
        super(props);
    }
    signUp = () => {
        try {
            console.log("hey redirect me");
        } catch (error) {
            console.error(error);
        }
    };
    render() {
        // return <div style={{ backgroundImage: `url(${newspaper2})`, background: `url(${newspaper2})no-repeat center center fixed`, backgroundSize: "cover", width: "100%", height: "auto", position: "fixed", top: "0rem", bottom: "0rem" }}>{/* <LoginForm /> */}</div>;
        return (
            <React.Fragment>
                <div>
                    <section className="loginPage left">
                        <div className="centered">
                            <h2>Hi New here ?</h2>
                            <p>Do you want to discover new ways of expressing your thoughts via blogging!</p>
                            <NavLink to={SIGNUPPAGE}>
                                <Button type="primary" htmlType="button" className="login-form-button"  style={{ background: "#D8DCDD", borderColor: "#D8DCDD", width: "auto" }}>
                                    Sign Up
                                </Button>
                            </NavLink>
                            <h1 style={{ color: "#D8DCDD" }}>_ _ _ _</h1>
                        </div>
                    </section>
                    <section className="loginPage right">
                        <div className="centered">
                            <LoginForm />
                        </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(ManagedLoginAdmin);
