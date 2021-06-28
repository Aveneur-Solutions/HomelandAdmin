import "./Sidebar.css";
import { push as Menu } from "react-burger-menu";
import { RootStoreContext } from "../../Stores/rootStore";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const rootStore = useContext(RootStoreContext);
  const { logout } = rootStore.userStore;
  const { loggedIn } = rootStore.commonStore;
  return (
    <div className="bm-main">
      <Menu>
        <Link className="bm-item" to="/dashboard">
          Admin Dashboard
        </Link>
        <Link className="bm-item" to="/units">
          Unit
        </Link>
        <Link className="bm-item" to="/galleryDash">
          Gallery
        </Link>
        <Link className="bm-item" to="/customerManagement">
          Customer Management
        </Link>
        <Link className="bm-item" to="/settings">
          Settings
        </Link>
        {loggedIn ? (
          <Link onClick={logout} className="bm-item" to="/">
            LOGOUT
          </Link>
        ) : (
          <Link className="bm-item" to="/">
            LOGIN
          </Link>
        )}
      </Menu>
    </div>
  );
};

export default observer(Sidebar);
