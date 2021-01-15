import React,{useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { HOMEPAGE } from "../../../constants/routes/constRoutes";
import { Card, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { temporaryDetails } from "../../usersData/actions/users.details.actions";

const LoginForm = (props) => {
    const { dispatch,loginDetails } = props;
  
    const newLogin = (values) => {
        //temporary once firebase is fixed...
        if (values.password === "mmk") {
            dispatch(temporaryDetails());
           
        }
    };
    useEffect(()=>{
        console.log(loginDetails);
     if(loginDetails&&loginDetails.login){
         console.log('take me home');
         props.history.push(HOMEPAGE);
     }
    },[dispatch,loginDetails])

    return (
        <section>
            <Card>
                <Card type="inner" title="">
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
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Username!",
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
            </Card>
        </section>
    );
};

export default connect((state)=>({
    loginDetails:state.getUserLoginsDetails
}))(withRouter(LoginForm));
