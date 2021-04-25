import Sidebar from "./components/Navbar/Sidebar";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { RootStoreContext } from "./Stores/rootStore";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import Gallery from "./components/Gallery/Gallery";
import Unit from "./components/Unit/Unit";
import Login from "./components/Auth/Login";
import React from "react";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import { Fragment } from "react";
import { Container } from "semantic-ui-react";
import UnitDetails from "./components/Unit/UnitDetails";

const App = () => {
  const rootStore = useContext(RootStoreContext);
  const { adminDashboard, showUnit, showGallery } = rootStore.showMenu;
  const { getUser, user, logout } = rootStore.userStore;
  const { token } = rootStore.commonStore;

  useEffect(() => {
    if (token && !user) {
      getUser();
    }
  }, [token, getUser, user]);

  return (
    <>
       <Fragment>
      <ToastContainer position="top-right" />
      <Route exact path="/" component={Login} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
           <Sidebar />
          
              <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/unitManagement" component={Unit} />
                <Route exact path="/gallery" component={Gallery} />
                {/* <Route
                  key={location.key}
                  path={["/createActivity", "/manage/:id"]}
                  component={ActivityForm}
                /> */}
                <Route path="/unit/:id" component={UnitDetails} />
                <Route path="/login" component={Login} />
                {/* <Route component={NotFound} /> */}
              </Switch>
         
          </Fragment>
        )}
      />
    </Fragment>
      {/* {user ? (
        <>
          <Sidebar />
          <div>
            {showGallery && <Gallery />}
            {adminDashboard && <Dashboard />}
            {showUnit && <Unit />}
          </div>
        </>
      ) : (
        <Login />
      )} */}
    </>
  );
};

export default observer(App);
