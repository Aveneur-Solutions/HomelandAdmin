import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {SidebarData} from './SidebarData'

const Nav = styled.div`
    background: #15171c;
    height: 80px;
    justify-content: flex-start;
    align-items: center;
`
const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    transition: 350ms;
    z-index: 10;
`
const SidebarWrap = styled.div`
    width: 100%;
`
const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background: #252831;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
`
const SidebarLabel = styled.span`
    margin-left: 16px
`
const DropdownLink = styled(Link)`
    background: #414757;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover{
        background: #632ce4;
        cursor: pointer;
    }
`

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    const [subnav, setSubNav] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    const showSubnav = () => setSubNav(!subnav)

    return (
        <>
            <Nav>
                <NavIcon to=""><FaIcons.FaBars onClick={showSidebar}/></NavIcon>  
            </Nav>
            <SidebarNav style={{left: sidebar ? '0' : '-100%'}}>
                <SidebarWrap>
                    <NavIcon to=""><AiIcons.AiOutlineClose onClick={showSidebar}/></NavIcon>
                    {SidebarData.map((item, index) => {
                        return (
                            <>
                            <SidebarLink to={item.path} key={index} onClick={item.subNav && showSubnav}>
                                <div>
                                    {item.icon}
                                    <SidebarLabel>{item.title}</SidebarLabel>
                                </div>
                                <div>
                                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                                </div>
                             </SidebarLink>
                             {subnav && item.subNav?.map((item, index) => {
                                 return (
                                     <DropdownLink to={item.path}>
                                         {item.icon}
                                         <SidebarLabel>{item.title}</SidebarLabel>
                                     </DropdownLink>
                                 )
                             })}
                             </>
                        )
                    })}
                </SidebarWrap>
            </SidebarNav>  
        </>
    )
}

export default Sidebar
