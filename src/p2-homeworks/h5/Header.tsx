import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import './Header.css'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { Data } from "./Data"


function Header() {

    const [sidebar, setSidebar] = useState(false)


    let showSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
          <div className={'navbar'}>
                <FaIcons.FaBars onClick={showSidebar} className={'menu__bars'}/>
          </div>  
            <nav className={sidebar ? 'nav__menu active' : 'nav__menu'}>
                <ul className={'nav__menu__items'} onClick={showSidebar}>
                    <li className={'nav__toggle'}>
                        <Link to="/" className={'menu__bars'}>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    { Data.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <NavLink 
                                    activeClassName={item.active}
                                    to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </NavLink>
                            </li>
                        )
                    }) }
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    );
}

export default Header
