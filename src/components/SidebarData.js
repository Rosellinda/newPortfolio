import React from 'react';
import * as FcIcons from "react-icons/fc";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";


const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <FcIcons.FcAbout />,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <MdIcons.MdWork />,
        cName: 'nav-text'
    },
    {
        title: 'Contacts',
        path: '/contacts',
        icon: <RiIcons.RiContactsBookLine />,
        cName: 'nav-text'
    }
]


export default SidebarData;