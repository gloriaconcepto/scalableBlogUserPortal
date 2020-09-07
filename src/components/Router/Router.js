import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Router =()=>{
//REDIREDCT TO LOGIN IF THE USER IS NOT LOGIN CONCEPTO.
    return(
        <Switch>
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
    )
}
