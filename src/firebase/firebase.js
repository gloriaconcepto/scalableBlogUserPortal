import app from "firebase/app";
import firebase from "firebase";
import { connect } from "react-redux";
import { createEmailError } from "../firebase/actions/firebase.actions";
import "firebase/auth";
import { appConfig } from "../config/config.js";

//firebase.initializeApp(appConfig.config);
class Firebase {
    constructor() {
        app.initializeApp(appConfig.config);
        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

    // doCreateUserWithEmailAndPassword = (email, password) => {
    //     let pp = false;
    //     this.auth
    //         .createUserWithEmailAndPassword(email, password)
    //         .then((authUser) => {
    //             return { status: "sucess", data: authUser };
    //         })
    //         .catch((error) => {
    //             console.log(error);

    //             return { status: "failed", data: error };
    //         });
    // };

    doSignInWithEmailAndPassword = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password);
    };
    doSignOut = () => {
        this.auth.signOut();
    };

    doPasswordReset = (email) => {
        this.auth.sendPasswordResetEmail(email);
    };

    doPasswordUpdate = (password) => {
        this.auth.currentUser.updatePassword(password);
    };
}
const mapDispatchToProps = (dispatch) => ({
    setErrorMessage: (error) => dispatch(createEmailError(error)),
});
export default Firebase;

// export default connect(null, mapDispatchToProps)(Firebase);
// export const auth = firebase.auth();
// export const fireDataBase= firebase.firestore()
