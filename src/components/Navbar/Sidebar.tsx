import "./Sidebar.css";
import { slide as Menu } from "react-burger-menu";
import { RootStoreContext } from "../../Stores/rootStore";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const rootStore = useContext(RootStoreContext);
  const { logout } = rootStore.userStore;

  return (
    <div className="sidenav">
      <Menu>
        <Link className="bm-item" to="/dashboard">
            Admin Dashboard
         </Link>
          <Link  className="bm-item" to="/units">
            Unit
         </Link>  
        <Link  className="bm-item" to="/gallery">
           Gallery
         </Link>
         <Link  className="bm-item" to="/customerManagement">
           Customer Management
         </Link>
         <Link  className="bm-item" to="/gallery">
           Settings
         </Link>
         <Link onClick={logout} className="bm-item" to="/">
         LOGOUT
         </Link>
      </Menu>
    </div>
  );
};

export default observer(Sidebar);
