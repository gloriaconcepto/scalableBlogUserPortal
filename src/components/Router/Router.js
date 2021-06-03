import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, Router, BrowserRouter, withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { LANDINGPAGE, SIGNUPPAGE, HOMEPAGE, SPECIFICBLOGPAGE, CREATEPOST, SETTINGS } from "../../constants/routes/constRoutes";
import RegistrationComponent from "../logins/admin/Registration";
import ManagedHomeComponent from "../HomeManager/index";
import ManagedPublishedBlog from "../publishedBlogs";
import AuthRoute from "./ProtecteRoutes";
import ManageLoginPages from "../logins";
import ManagedHeader from "../Header";
import ManagedCreatePost from "../CreatePosts";
import ManagedSetting from "../Setting";
import "../Header/header.css";
export const history = createBrowserHistory();

const Routes = (props) => {
    const { userdetails } = props;
    //REDIREDCT TO LOGIN IF THE USER IS NOT LOGIN CONCEPTO.
    console.log(userdetails);
    return (
        <div>
            {userdetails && userdetails.login && (
                <div className="headerContainer">
                    <ManagedHeader />
                </div>
            )}
            <Switch>
                <div className={"container__wrap"}>
                    <Route exact={true} path={SPECIFICBLOGPAGE} component={ManagedPublishedBlog} />
                    <Route exact={true} path={SIGNUPPAGE} component={RegistrationComponent} />
                    <Route exact={true} path={HOMEPAGE} component={ManagedHomeComponent} />
                    <Route exact={true} path={LANDINGPAGE} component={ManageLoginPages} />
                    <Route exact={true} path={CREATEPOST} component={ManagedCreatePost} />
                    <Route exact={true} path={SETTINGS} component={ManagedSetting} />
                </div>
            </Switch>
        </div>
    );
};
export default connect((state) => ({
    userdetails: state.getUserLoginsDetails,
}))(Routes);
