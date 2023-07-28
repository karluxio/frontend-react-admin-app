import { SidebarContext, SidebarHeader } from "@/scenes";

import { Box } from "@mui/material";

import { Menu, ProSidebar } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import { useContext } from "react";
import { SidebarBody } from "./components/SidebarBody";

const Sidebar = () => {
  const { isCollapsed, proSidebarCustomStyles } = useContext(SidebarContext);

  return (
    <Box height={"100%"} sx={proSidebarCustomStyles}>
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <SidebarHeader />
          <SidebarBody />
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
