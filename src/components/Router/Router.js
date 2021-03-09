import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, Router, BrowserRouter, withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { LANDINGPAGE, SIGNUPPAGE, HOMEPAGE } from "../../constants/routes/constRoutes";
import RegistrationComponent from "../logins/admin/Registration";
import ManagedHomeComponent from "../HomeManager/index";
import AuthRoute from "./ProtecteRoutes";
import ManageLoginPages from "../logins";
import ManagedHeader from "../Header";
import "../Header/header.css";
export const history = createBrowserHistory();

const Routes = (props) => {
    const { userdetails } = props;
    //REDIREDCT TO LOGIN IF THE USER IS NOT LOGIN CONCEPTO.
    console.log(userdetails);
    return (
        <Router history={history}>
            {userdetails && userdetails.login && (
                <div className="headerContainer">
                    <ManagedHeader />
                </div>
            )}

            <div className={userdetails && userdetails.login ? "container__wrap" : ""}>
                <Switch>
                    <Route exact={true} path={SIGNUPPAGE} component={RegistrationComponent} />
                    <Route exact={true} path={HOMEPAGE} component={ManagedHomeComponent} />
                    <Route exact={true} path={LANDINGPAGE} component={ManageLoginPages} />
                </Switch>
            </div>
        </Router>
    );
};
export default connect((state) => ({
    userdetails: state.getUserLoginsDetails,
}))(withRouter(Routes));
