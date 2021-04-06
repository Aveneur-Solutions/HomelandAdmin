import React from 'react'
import "./Sidebar.css"
import { slide as Menu } from 'react-burger-menu'

const Sidebar = () => {
    return (
        <div className="sidenav">
            <Menu>
            <a id="home" className="menu-item" href="/">Admin Dashboard</a>
            <a id="unit" className="menu-item" href="/unit">Unit</a>
            <a id="Gallery" className="menu-item" href="/gallery">Gallery</a>
            <a id="Tax" className="menu-item" href="/tax">Tax</a>
            <a id="Activity Log" className="menu-item" href="/activitylog">Activity Log</a>
            <a id="User Feedback" className="menu-item" href="/userfeedback">User Feedback</a>
            <a id="Customer Management" className="menu-item" href="/customermanagement">Customer Management</a>
            <a className="menu-item--small" href="">Settings</a>
            <button className="menu-item">LOGOUT</button>
             </Menu>
        </div>
    )
}

export default Sidebar
