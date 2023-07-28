import { tokens } from "@/theme";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import { SidebarContext } from "./SidebarContext";

export const SidebarProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const proSidebarCustomStyles = {
    "& .pro-sidebar-inner": {
      background: `${colors.primary[400]} !important`,
    },
    "& .pro-icon-wrapper": {
      backgroundColor: "transparent !important",
    },
    "& .pro-inner-item": {
      padding: "5px 35px 5px 20px !important",
    },
    "& .pro-inner-item:hover": {
      color: "#868dfb !important",
    },
    "& .pro-menu-item.active": {
      color: "#6870fa !important",
    },
  };
  return (
    <SidebarContext.Provider
      value={{
        isCollapsed,
        setIsCollapsed,
        selected,
        setSelected,
        colors,
        theme,
        proSidebarCustomStyles,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
