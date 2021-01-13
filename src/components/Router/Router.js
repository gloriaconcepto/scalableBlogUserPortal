import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, Router, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { LANDINGPAGE, SIGNUPPAGE, HOMEPAGE } from "../../constants/routes/constRoutes";
import RegistrationComponent from "../logins/admin/Registration";
import ManagedHomeComponent from "../HomeManager/index";
import AuthRoute from "./ProtecteRoutes";
import ManageLoginPages from "../logins";

export const history = createBrowserHistory();

const Routes = (props) => {
    const { userdetails } = props;
    //REDIREDCT TO LOGIN IF THE USER IS NOT LOGIN CONCEPTO.
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route exact path={LANDINGPAGE} component={ManageLoginPages} />
                    <Route exact path={SIGNUPPAGE} component={RegistrationComponent} />
                    <AuthRoute authUser={userdetails && userdetails.Userdata && userdetails.Userdata.data.auth} path={HOMEPAGE} component={ManagedHomeComponent} />
                    {/* <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          /> */}
                </Switch>
            </div>
        </Router>
    );
};
export default connect((state) => ({
    userdetails: state.getUserLoginsDetails,
}))(Routes);
//export default connect((state) => ({
//user: state.viewuser
//}))(ViewRandomiser);
