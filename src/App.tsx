import Sidebar from "./components/Navbar/Sidebar";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { RootStoreContext } from "./Stores/rootStore";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import Gallery from "./components/Gallery/Gallery";
import Unit from "./components/Unit/Unit";
import Login from "./components/Auth/Login";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import { Fragment } from "react";
import UnitDetails from "./components/Unit/UnitDetails";
import UnitForm from "./components/Unit/UnitForm";
import CustomerDash from "./components/Customer Management/CustomerDash";
import GalleryDash from "./components/Gallery/GalleryDash";
import ImageGallery from "./components/Gallery/ImageGallery";
import ImageDetails from "./components/Gallery/ImageDetails";
import { history } from ".";
import PrivateRoute from "./private/PrivateRoute";
import Reloading from "./private/Reloading";
import CustomerDashboard from "./components/Customer Management/CustomerDashboard";

const App = () => {
  const rootStore = useContext(RootStoreContext);
  const { getUser } = rootStore.userStore;
  const { token, loggedIn } = rootStore.commonStore;

  useEffect(() => {
    if(!token && !loggedIn) {
      history.push("/")
    } else {
      getUser()
    }
  }, [token, getUser, loggedIn]);

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
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/units" component={Unit} />
                <PrivateRoute exact path="/galleryDash" component={GalleryDash} />
                <PrivateRoute exact path="/imageGallery" component={ImageGallery} />
                <PrivateRoute exact path="/gallery" component={Gallery} />
                <PrivateRoute path="/image/:id" component={ImageDetails} />
                <PrivateRoute exact path="/unitForm" component={UnitForm} />
                <PrivateRoute exact path="/unitForm/:id" component={UnitForm} />
                <PrivateRoute path="/unit/:id" component={UnitDetails} />
                <PrivateRoute path="/customerManagement" component={CustomerDash} />
                <PrivateRoute path="/customerDashboard" component={CustomerDashboard} />
                <Route path="/reloading" component={Reloading} />
                {/* <Route component={NotFound} /> */}
              </Switch>
            </Fragment>
          )}
        />
      </Fragment>
    </>
  );
};

export default observer(App);
