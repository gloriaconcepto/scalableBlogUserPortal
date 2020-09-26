import React from "react";
import { Route, Redirect } from "react-router-dom";


const AuthRoute = ({ authUser, component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        authUser ? (
          <Component authUser={authUser} {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

  export default AuthRoute;