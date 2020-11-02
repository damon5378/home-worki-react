import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import './Header.css'


export const Data = [
    {
        title: 'Pre Junior',
        path: '/pre-junior',
        icon: <FaIcons.FaBaby />,
        cName: 'nav__text',
        active: 'active'
    },
    {
        title: 'Junior',
        path: '/junior',
        icon: <MdIcons.MdChildCare />,
        cName: 'nav__text',
        active: 'active'
    },
    {
        title: 'Junior+',
        path: '/junior+',
        icon: <FaIcons.FaChild />,
        cName: 'nav__text',
        active: 'active'
    }
]