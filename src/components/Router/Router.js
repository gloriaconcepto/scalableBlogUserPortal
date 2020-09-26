import React from "react";
import { Switch, Route, Redirect, Router, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { LANDINGPAGE, SIGNUPPAGE } from "../../constants/routes/constRoutes";
import RegistrationComponent from "../logins/admin/Registration";
//import AuthRoute from "./ProtecteRoutes";
import ManageLoginPages from "../logins";

export const history = createBrowserHistory();

const Routes = (props) => {
    //REDIREDCT TO LOGIN IF THE USER IS NOT LOGIN CONCEPTO.
    return (
        <BrowserRouter history={history}>
            <div>
                <Switch>
                    <Route exact path={LANDINGPAGE} component={ManageLoginPages} />
                    <Route exact path={SIGNUPPAGE} component={RegistrationComponent} />
                    {/* <AuthRoute /> */}
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
        </BrowserRouter>
    );
};
export default Routes;
