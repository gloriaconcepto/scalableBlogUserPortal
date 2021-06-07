import React, { memo, useState, useEffect } from "react";
import { Form, Input, Button, Spin, Alert } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { set } from "lodash";
import { openNotificationWithIcon } from "../../utilities/sharesComponents/Notification";
const ManagedAccount = memo((props) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const [errorMessage, setErrorMessage] = useState("false");
    const updatePassword = (values) => {
        console.log("am about updating");
    };
    const onClose = () => {
        setErrorMessage(null);
    };

    const displayForgetPasswordModule = (e) => {
        //show modulus here
        e.preventDefault();
        console.log("lose yourself to dance");
        // openNotificationWithIcon("success", "Password Change", "Password Change Successful", "topRight");
    };
    //useeffect will handle loading and also error bit of things

    return (
        <React.Fragment>
            <h4 className="sub-title">Change Password</h4>
            {errorMessage !== null && <Alert message={errorMessage} type="error one" closable onClose={onClose} style={{ width: "fit-content" }} />}
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={updatePassword}
                style={{ fontFamily: " BasisGrotesquePro-Regular, sans-serif" }}
            >
                <Form.Item
                    name="password"
                    // label="New Password"
                    rules={[
                        {
                            message: "Please input your New Password!",
                        },
                    ]}
                >
                    <label>New Password</label>
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                    <span className="login-form-forgot" href="" style={{ paddingRight: "13rem", cursor: "pointer", fontSize: "11px", color: "#629EFF" }} onClick={(e) => displayForgetPasswordModule(e)}>
                        Forgot password
                    </span>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{ background: "#D8DCDD", borderColor: "#D8DCDD" }}>
                        {isUpdating ? <Spin style={{ color: "red" }} /> : "Update"}
                    </Button>
                </Form.Item>
            </Form>
        </React.Fragment>
    );
});

export default ManagedAccount;
