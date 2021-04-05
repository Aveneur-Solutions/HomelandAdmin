import React from 'react'
import * as AdIcons from 'react-icons/fc'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title: 'Admin',
        path: '/admin',
        icon: <AdIcons.FcAssistant/>
    },
    {
        title: 'Unit',
        path: '/unit',
        icon: <AdIcons.FcDepartment/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpen: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Unit 1',
                path: '/unit/unit_1',
                icon: <AdIcons.FcDepartment/>
            }
        ]
    },
    {
        title: 'Gallery',
        path: '/gallery',
        icon: <AdIcons.FcGallery/>
    },
    {
        title: 'Tax',
        path: '/tax',
        icon: <AdIcons.FcBearish/>
    },
    {
        title: 'Activity Log',
        path: '/activitylog',
        icon: <AdIcons.FcInspection/>
    },
    {
        title: 'User Feedback',
        path: '/userfeedback',
        icon: <AdIcons.FcFeedback/>
    },
    {
        title: 'Customer Management',
        path: '/customermanagement',
        icon: <AdIcons.FcCustomerSupport/>
    }
]