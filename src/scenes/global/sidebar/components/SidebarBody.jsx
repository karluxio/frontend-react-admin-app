import {
  SidebarContext,
  SidebarItem,
  groupsSidebarData,
  SidebarGroups,
} from "@/scenes";

import { Box } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/MenuOutlined";

import React, { useContext } from "react";

export const SidebarBody = () => {
  const { selected, setSelected, isCollapsed } = useContext(SidebarContext);

  return (
    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
      <SidebarItem
        title="Dashboard"
        to="/"
        icon={<HomeOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
      />

      <SidebarGroups
        groups={groupsSidebarData}
        selected={selected}
        setSelected={setSelected}
      />
    </Box>
  );
};
