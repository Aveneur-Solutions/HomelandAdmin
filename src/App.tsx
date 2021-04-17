import Sidebar from "./components/Navbar/Sidebar";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { RootStoreContext } from "./Stores/rootStore";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import Gallery from "./components/Gallery/Gallery";
import Unit from "./components/Unit/Unit";

const App = () => {
  const rootStore = useContext(RootStoreContext);
  const { adminDashboard, showUnit, showGallery } = rootStore.showMenu;
  
  return (
    <>
      <Sidebar />
      <div>
        <Sidebar />
        {showGallery && <Gallery />}
        {adminDashboard && <Dashboard />}
        {showUnit && <Unit />}
      </div>
    </>
  );
};

export default observer(App);
