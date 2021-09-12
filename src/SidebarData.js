import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <PersonOutlineIcon  />,
    cName: 'nav-text'
  },
  {
    title: 'Chat',
    path: '/chat',
    icon: <ChatBubbleOutlineIcon />,
    cName: 'nav-text'
  }
];