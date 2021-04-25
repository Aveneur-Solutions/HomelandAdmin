import "./Sidebar.css";
import { slide as Menu } from "react-burger-menu";
import { RootStoreContext } from "../../Stores/rootStore";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const rootStore = useContext(RootStoreContext);
  const {
    setAdminDash,
    setUnitVisibility,
    setGalleryVisibility,
    setTaxVisibility,
    setLogVisibility,
    setFeedbackVisibility,
    setCustomerVisibility,
    setSettingsVisibility,
  } = rootStore.showMenu;
  const { logout, user } = rootStore.userStore;

  return (
    <div className="sidenav">
      <Menu>
        <button onClick={() => setAdminDash()} id="home" className="menu-item">
        <Link to="/dashboard">
            Admin Dashboard
         </Link>
        </button>

        <button
          onClick={() => setUnitVisibility()}
          id="unit"
          className="menu-item"
        >
          <Link to="/unitManagement">
            Unit
         </Link>
        </button>
        <button
          onClick={() => setGalleryVisibility()}
          id="Gallery"
          className="menu-item"
        >
        <Link to="/gallery">
           Gallery
         </Link>
        </button>
        <button
          onClick={() => setCustomerVisibility()}
          id="Customer Management"
          className="menu-item"
        >
          Customer Management
        </button>
        <button
          onClick={() => setSettingsVisibility()}
          className="menu-item--small"
        >
          Settings
        </button>
        <button className="menu-item" onClick={logout}>
          LOGOUT
        </button>
      </Menu>
    </div>
  );
};

export default observer(Sidebar);
