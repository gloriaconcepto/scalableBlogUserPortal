import React, { memo, useState, useEffect } from "react";
import { Form, Input, Button, Spin, Alert, Modal } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { values } from "lodash";

const ForgotPassword = memo(({ openModal, showModal, cancelModal, maskClosable }) => {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [errors, setError] = useState(null);
    const [email, setEmail] = useState(null);
    //on setting password confirmLoading>>true
    //then on success or error confirmLoading>>false
    //openmodal to false on success
    const forgetPasswordApiCall = () => {
        // get the email from the local storage
        //if delete pls do call to get it.
        console.log("forgetPassword");
        if (email.length > 2) {
            console.log(email);
        }
    };
    const onClose = () => {
        setError(null);
    };
    const handleCancel = () => {
        // get the email from the local storage
        //if delete pls do call to get it.
        console.log("cancel");
        cancelModal();
    };
    const onChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setEmail(e.target.value);
    };
    return (
        <>
            <Modal title="Change Password" visible={openModal} onOk={forgetPasswordApiCall} confirmLoading={confirmLoading} onCancel={handleCancel} okText="Reset Password" maskClosable={maskClosable}>
            {errors !== null && <Alert message={errors} type="error one" closable onClose={onClose} style={{ width: "fit-content" }} />}
                <Input placeholder="Email" type="email" onChange={onChange} />
            </Modal>
        </>
    );
});
export default ForgotPassword;
