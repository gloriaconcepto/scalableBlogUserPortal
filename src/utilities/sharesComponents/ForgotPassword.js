import React, { memo, useState, useEffect } from "react";
import { Form, Input, Button, Spin, Alert, Modal } from "antd";
import { LockOutlined } from "@ant-design/icons";

import { withFirebase } from "../../firebase";

const ForgotPassword = memo((props) => {
    const { openModal, showModal, cancelModal, maskClosable, firebase, showToast } = props;
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [errors, setError] = useState(null);
    const [email, setEmail] = useState(null);
    useEffect(() => {
        return () => {
            console.log("idey unmount");
            setEmail(null);
            setConfirmLoading(false);
        };
    }, []);
    //on setting password confirmLoading>>true
    //then on success or error confirmLoading>>false
    //openmodal to false on success
    const forgetPasswordApiCall = () => {
        // get the email from the local storage
        //if delete pls do call to get it.
        console.log("forgetPassword");
        let userEmailDetails = undefined;
        if (localStorage.getItem("userEmail") != null) {
            userEmailDetails = window.localStorage.getItem("userEmail");
            console.log("the key dey oo", userEmailDetails);
        }

        if (userEmailDetails === email) {
            console.log(email);
            setConfirmLoading(true);
            firebase
                .doPasswordReset(email)
                .then((response) => {
                    console.log(response);
                    setConfirmLoading(false);
                    setEmail(null);
                    cancelModal();
                    showToast();
                })
                .catch((error) => {
                    console.log(error);
                    setError(error && error.message);
                    setConfirmLoading(false);
                });
        } else {
            ///check if it is an empty email.
            if (email === null) {
                setError("Email cannot be empty");
            } else {
                setError("Email does not match email attached to this account");
            }
        }
    };
    const onClose = () => {
        setError(null);
    };
    const handleCancel = () => {
        // get the email from the local storage
        //if delete pls do call to get it.
     
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
                {errors !== null && <Alert message={errors} type="error one" closable onClose={onClose} style={{ width: "fit-content", marginBottom: "1rem" }} />}
                <Input placeholder="Email" type="email" onChange={onChange} value={email} />
            </Modal>
        </>
    );
});
export default withFirebase(ForgotPassword);
