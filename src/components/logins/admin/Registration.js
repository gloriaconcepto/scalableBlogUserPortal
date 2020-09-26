import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Card, Form, Input, Button, Checkbox } from "antd";

class RegistrationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: null,
            password: null,
            confirmedPassword: null,
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
        });
    }

    onFinish = (data) => {
        console.log("process data", data);
    };
    render() {
        return (
            <React.Fragment>
                <div className="registrationPage ">
                    <Card size="small" style={{ width: 300, margin: "auto", marginTop: "13%" ,textAlign:'center'}}>
                        <Card type="inner" title="Sign up">
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={this.onFinish}
                                style={{ fontFamily: " BasisGrotesquePro-Regular, sans-serif", width: "max-content" }}
                            >
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
                                    <Input.Password/>
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
                                    <Input type="password" placeholder="Confirm Password" />
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
export default withRouter(RegistrationComponent);
