import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { RootStoreContext } from "../Stores/rootStore";

function PrivateRoute({ component: Component, ...rest }: any) {
  const rootStore = useContext(RootStoreContext);
  const { loggedIn } = rootStore.commonStore;

  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/reloading", state: {from: props.location.pathname} }} />
        )
      }
    />
  );
}

export default PrivateRoute;
