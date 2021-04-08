import "./Sidebar.css"
import { slide as Menu } from 'react-burger-menu'
import { RootStoreContext } from '../Stores/rootStore'
import { useContext } from 'react'
import { observer } from "mobx-react-lite"

const Sidebar = () => {
  const rootStore = useContext(RootStoreContext);
  const {showUnit, setUnitVisibility, setGalleryVisibility, setTaxVisibility, setLogVisibility, setFeedbackVisibility, setCustomerVisibility, setSettingsVisibility} = rootStore.showMenu;
    return (
        <div className="sidenav">
            <Menu>
            <button id="home" className="menu-item" >Admin Dashboard</button>
            <button  onClick={() => setUnitVisibility()} id="unit" className="menu-item">Unit</button>
            <button  onClick={() => setGalleryVisibility()} id="Gallery" className="menu-item">Gallery</button>
            <button  onClick={() => setTaxVisibility()} id="Tax" className="menu-item">Tax</button>
            <button  onClick={() => setLogVisibility()} id="Activity Log" className="menu-item">Activity Log</button>
            <button  onClick={() => setFeedbackVisibility()} id="User Feedback" className="menu-item">User Feedback</button>
            <button  onClick={() => setCustomerVisibility()} id="Customer Management" className="menu-item">Customer Management</button>
            <button  onClick={() => setSettingsVisibility()} className="menu-item--small">Settings</button>
            <button className="menu-item">LOGOUT</button>
             </Menu>
        </div>
    )
}

export default observer(Sidebar);
