import Sidebar from './components/Navbar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { RootStoreContext } from './components/Stores/rootStore';
import {useContext} from 'react'
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

const App = () => {
  const rootStore = useContext(RootStoreContext);
  const {showUnit} = rootStore.showMenu;
  useEffect(() => {
    console.log(showUnit)
  }, [])
  return (
    <>

<Sidebar/>
    <div>
      {showUnit && <Dashboard/>}
    </div>
    </>
  );
}

export default observer(App);
