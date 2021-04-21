import Sidebar from "./components/Navbar/Sidebar";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { RootStoreContext } from "./Stores/rootStore";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import Gallery from "./components/Gallery/Gallery";
import Unit from "./components/Unit/Unit";
import Login from "./components/Auth/Login";

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
      {user ? (
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
      )}
    </>
  );
};

export default observer(App);
