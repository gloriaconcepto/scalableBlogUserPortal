import React, { memo, useState, useEffect } from "react";
import { Form, Input, Button, Spin, Alert } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { openNotificationWithIcon } from "../../utilities/sharesComponents/Notification";
import ForgotPassword from "../../utilities/sharesComponents/ForgotPassword";
import { withFirebase } from "../../firebase";
const ManagedAccount = memo((props) => {
    const { firebase } = props;
    const [isUpdating, setIsUpdating] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("false");

    const updatePassword = (values) => {
        console.log("am about updating", values);
        // firebase.doPasswordUpdate()
    };
    const onClose = () => {
        setErrorMessage(null);
    };

    const displayForgetPasswordModule = (e) => {
        //show modulus here
        e.preventDefault();
        showModal();
        console.log("lose yourself to dance");
        // openNotificationWithIcon("success", "Password Change", "Password Change Successful", "topRight");
    };
    //useeffect will handle loading and also error bit of things
    const showModal = () => {
        setIsModalOpen(true);
    };
    const cancelModal = () => {
        setIsModalOpen(false);
    };
    return (
        <React.Fragment>
            <h4 className="sub-title">Change Password</h4>
            {errorMessage !== null && <Alert message={errorMessage} type="error one" closable onClose={onClose} style={{ width: "fit-content" }} />}
            <Form
                name="update_password"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={updatePassword}
                style={{ fontFamily: " BasisGrotesquePro-Regular, sans-serif" }}
            >
                <label>New Password</label>

                <Form.Item
                    name="password"
                    // label="New Password"
                    rules={[
                        {
                            message: "Please input your New Password!",
                        },
                    ]}
                >
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                </Form.Item>
                <Form.Item>
                    <label className="login-form-forgot" href="" style={{ paddingRight: "13rem", cursor: "pointer", fontSize: "11px", color: "#629EFF" ,marginTop: '-2rem'}} onClick={(e) => displayForgetPasswordModule(e)}>
                        Forgot password
                    </label>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{ background: "#D8DCDD", borderColor: "#D8DCDD" }}>
                        {isUpdating ? <Spin style={{ color: "red" }} /> : "Update"}
                    </Button>
                </Form.Item>
            </Form>
            <ForgotPassword openModal={isModalOpen} showModal={showModal} cancelModal={cancelModal} maskClosable={false} />
        </React.Fragment>
    );
});

export default withFirebase(ManagedAccount);
