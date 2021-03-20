import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
//type rsc to create stateless component
import React from "react";
import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLarge from "@material-ui/icons/DonutLarge";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";

function Sidebar(props) {
  return (
    <div class="sidebar">
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar_searchContainer ">
          <SearchOutlined />   
          <input placeholder="search or start" type="text" />
        </div>
      </div>

      <div className="sidebar_chats">

        
      <SidebarChat  addNewChat/>
      <SidebarChat/>
      <SidebarChat/>
      <SidebarChat/>
      <SidebarChat/>  <SidebarChat/>
      <SidebarChat/>
      <SidebarChat/>
      <SidebarChat/>  <SidebarChat/>
      <SidebarChat/>
      <SidebarChat/>
      <SidebarChat/> 
      
      </div>
      
    </div>
  );
}

export default Sidebar;
