import ReactLogo from "@/assets/react.svg";
import { SidebarContext, SidebarHeaderTitle } from "@/scenes";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import React, { useContext } from "react";
import { MenuItem } from "react-pro-sidebar";
import { SidebarHeaderLogo } from "./SidebarHeaderLogo";

export const SidebarHeader = () => {
  const { isCollapsed, setIsCollapsed, colors } = useContext(SidebarContext);

  const styles = {
    margin: "10px 0 20px 0",
    color: colors.grey[100],
  };

  return (
    <>
      {/* TITLE */}
      <MenuItem
        onClick={() => setIsCollapsed(!isCollapsed)}
        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
        style={styles}
      >
        {!isCollapsed && <SidebarHeaderTitle />}
      </MenuItem>

      {/* USER PHOTO, USERNAME AND ROLE */}
      {!isCollapsed && (
        <SidebarHeaderLogo
          logo={ReactLogo}
          username="Luciano Figueroa"
          role="Dev"
        />
      )}
    </>
  );
};
