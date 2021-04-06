import Sidebar from './components/Navbar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { RootStoreContext } from './components/Stores/rootStore';
import {useContext} from 'react'
import { observer } from 'mobx-react-lite';

const App = () => {
  const rootStore = useContext(RootStoreContext);
  const {showUnit} = rootStore.showMenu
  return (
    <div>
      <Sidebar/>
      {showUnit && <Dashboard/>}
    </div>
  );
}

export default observer(App);
