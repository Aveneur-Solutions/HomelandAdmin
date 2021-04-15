import Sidebar from './components/Navbar/Sidebar'
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { RootStoreContext } from './components/Stores/rootStore';
import {useContext} from 'react'
import { observer } from 'mobx-react-lite';
import Gallery from './components/Gallery/Gallery';
import { useEffect } from 'react';


const App = () => {
  const rootStore = useContext(RootStoreContext);
  const {adminDashboard, showUnit, showGallery} = rootStore.showMenu;
  useEffect(() => {
    console.log(showUnit)
  }, [])
  return (
    <>

<Sidebar/>
    <div>
      <Sidebar/>
      {showGallery && <Gallery/>}
      {adminDashboard && <Dashboard/>}
      {showUnit && "HELLO"}
    </div>
    </>
  );
}

export default observer(App);
