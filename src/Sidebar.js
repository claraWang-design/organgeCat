
import "./Sidebar.css";
// import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
// import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
// import MenuBookIcon from '@material-ui/icons/MenuBook';
// import SidebarOption from './SidebarOption';
// import { Button } from "@material-ui/core";

import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

function Sidebar() {


    return (
        <div className="sidebar">
            <h2>Hi,</h2>
            <div style={{ marginTop: 20 }}><h1>How are you feeling today?</h1></div>
            <br/>
            <br/>
            {/* <Link to="/checkin" className="btn"><Button variant="outlined" className="sidebar__checkin">Check-In </Button></Link> */}

            {/* <SidebarOption active Icon={PersonOutlineIcon} text="Profile" />
            <SidebarOption Icon={ChatBubbleOutlineIcon} text="Chat" />
            <SidebarOption Icon={MenuBookIcon} text="Diary" /> */}

            {SidebarData.map((item, index) => {
                return (
                    <div key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </div>
                );
            })}

            <br/>
            <br/>

            <div className="cat">
                <img src="https://blush.design/api/download?shareUri=OWH0TnQG09ezNeZe&w=800&h=800&fm=png" alt=""></img>
            </div>

        </div>
    )
}

export default Sidebar
