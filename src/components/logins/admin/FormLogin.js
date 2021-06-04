import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { HOMEPAGE } from "../../../constants/routes/constRoutes";
import { Card, Form, Input, Button, Checkbox, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { temporaryDetails } from "../../usersData/actions/users.details.actions";
import { withFirebase } from "../../../firebase";
//export const history = createBrowserHistory();

const LoginForm = (props) => {
    const { dispatch, loginDetails, firebase } = props;
    const [errorMessage, setError] = useState(null);
    const [userData, setUserData] = useState({ email: undefined });

    const newLogin = (values) => {
        //temporary once firebase is fixed...
        firebase
            .doSignInWithEmailAndPassword(values.email, values.password)
            .then((response) => {
              
                setUserData({ ...userData, email: response && response.user && response.user.providerData && response.user.providerData[0].email });
                dispatch(temporaryDetails());
             
            })
            .catch((error) => {
                setError(error && error.message);
            });
    };

    useEffect(() => {
        if (loginDetails && loginDetails.login) {
            props.history.push(HOMEPAGE);
            if (typeof Storage !== "undefined") {
                const userDataEmail = userData.email;
                window.localStorage.setItem("userEmail", userDataEmail);
            }
            //store the details in
        }
    }, [dispatch, loginDetails]);

    const onClose = () => {
        setError(null);
    };
    return (
        // <section>
        //<Card>
        <Card type="inner" title="" style={{ backgroundColor: "#354147" }}>
            {errorMessage !== null && <Alert message={errorMessage} type="error one" closable onClose={onClose} style={{ marginBottom: "1.5rem" }} />}
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={newLogin}
                style={{ fontFamily: " BasisGrotesquePro-Regular, sans-serif", width: "max-content" }}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            type: "email",
                            message: "The input is not valid email!",
                        },
                        {
                            required: true,
                            message: "Please input your email ",
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
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{ background: "#D8DCDD", borderColor: "#D8DCDD" }}>
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </Card>
        //</Card>
        // </section>
    );
};

export default connect((state) => ({
    loginDetails: state.getUserLoginsDetails,
}))(withRouter(withFirebase(LoginForm)));
