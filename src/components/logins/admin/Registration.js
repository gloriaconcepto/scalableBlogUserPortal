import React, { Component } from "react";
import { connect } from "react-redux";
//import { withFirebase } from "../../../firebase/";
import { NavLink, withRouter } from "react-router-dom";
import { auth, fireDataBase } from "../../../firebase/firebase";
import { Card, Form, Input, Button, Checkbox, Alert } from "antd";
import { ErrorMessages } from "../../../constants/constErrors";
import { HOMEPAGE } from "../../../constants/routes/constRoutes";
import { getUserDetails } from "../../usersData/actions/users.details.actions";
class RegistrationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: null,
            password: null,
            confirmedPassword: null,
            errorMessage: null,
            name: null,
        };
    }
    componentDidMount() {
        console.log("help me");
    }
    componentWillUnmount() {
        this.setState({
            loading: false,
            email: null,
            password: null,
            confirmedPassword: null,
            errorMessage: null,
            name: null,
        });
    }
    alertError = (error) => {
        if (error === ErrorMessages.EMAILALREADYINUSE) {
            this.setState({ errorMessage: "Email already in use" });
        } else if (error === ErrorMessages.INVALIDEMAIL) {
            this.setState({ errorMessage: "Invalid Email" });
        } else if (error === ErrorMessages.OPERATIONNOTALLOWED) {
            this.setState({ errorMessage: "Operation not allowed" });
        } else if (error === ErrorMessages.WEAKPASSWORD) {
            this.setState({ errorMessage: "Weak password" });
        } else if (error === ErrorMessages.BADARGUMENT) {
            this.setState({ errorMessage: "Invalid response" });
        }
    };
    handleChange = (changeValues) => {
        console.log(changeValues.target);
    };
    newLogin = (data) => {
        console.log("new data");
        if (data.password === "mmk") {
            this.props.history.push(HOMEPAGE);
        }
    };
    onFinish = async (data) => {
        console.log("process data", data);
       
        this.setState({ errorMessage: null });

        try {
            const dataBase = fireDataBase;
            dataBase.settings({
                timestampsInSnapshots: true,
            });

            let nameChecker = dataBase.collection(`users`);
            let snapshot = await nameChecker.where("name", "==", data.name).get();
            if (snapshot.empty) {
                //here i create the authenticate users.....
                auth.createUserWithEmailAndPassword(data.email, data.password)
                    .then(() => {
                        //set the database....
                        dataBase
                            .collection(`users`)
                            .doc(auth.currentUser.uid)
                            .set({
                                name: data.name,
                                email: data.email,
                                authorisation: "contentWritter",
                            })
                            .then(() => {
                                //route from here to home page..
                                console.log("heading home page baby");
                                const userData = {
                                    details: auth.currentUser,
                                    auth: true,
                                    authorisation: "contentWritter",
                                };
                                this.props.dispatch(getUserDetails(userData));
                                this.props.history.push(HOMEPAGE);
                            })
                            //ensure we catch any errors at this stage to advise us if something does go wrong
                            .catch((error) => {
                                this.setState({ errorMessage: "Something went wrong,retry againa " });
                            });
                    })
                    .catch((e) => {
                        this.alertError(e.code);
                    });
            } else {
                this.setState({ errorMessage: "User name taken already" });
            }
        } catch (e) {
            console.error(e);
        }
    };
    render() {
        const { errorMessage } = this.state;
        console.log(errorMessage);
        return (
            <React.Fragment>
                <div className="registrationPage ">
                    <Card size="small" style={{ width: 300, margin: "auto", marginTop: "13%", textAlign: "center" }}>
                        <Card type="inner" title="Sign up">
                            {errorMessage !== null && (
                                <Alert
                                    message={errorMessage}
                                    type="error one"
                                    closable
                                    //   onClose={onClose}
                                    style={{ marginBottom: "1.5rem" }}
                                />
                            )}
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={this.newLogin}
                                style={{ fontFamily: " BasisGrotesquePro-Regular, sans-serif", width: "max-content" }}
                            >
                                <Form.Item
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input name!",
                                        },
                                    ]}
                                >
                                    <Input placeholder="Name" />
                                </Form.Item>
                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input correct email addressed!",
                                        },
                                    ]}
                                >
                                    <Input placeholder="Email" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input your Password!",
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item
                                    name="confirmedPassword"
                                    dependencies={["password"]}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please confirm your Password!",
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(rule, value) {
                                                if (!value || getFieldValue("password") === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject("The two passwords that you entered do not match!");
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password placeholder="Confirm Password" />
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button" style={{ background: "#D8DCDD", borderColor: "#D8DCDD" }}>
                                        Sign Up
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Card>
                </div>
            </React.Fragment>
        );
    }
}
export default withRouter(connect((state) => ({}))(RegistrationComponent));
//export default connect((state) => ({
//user: state.viewuser
//}))(ViewRandomiser);
