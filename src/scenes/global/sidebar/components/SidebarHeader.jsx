import { SidebarContext } from "@/scenes";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useContext } from "react";
import { MenuItem } from "react-pro-sidebar";

export const SidebarHeader = () => {
  const { isCollapsed, setIsCollapsed, colors } = useContext(SidebarContext);

  return (
    <>
      <MenuItem
        onClick={() => setIsCollapsed(!isCollapsed)}
        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
        style={{
          margin: "10px 0 20px 0",
          color: colors.grey[100],
        }}
      >
        {!isCollapsed && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            ml="15px"
          >
            <Typography variant="h3" color={colors.grey[100]}>
              ADMIN
            </Typography>
            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
        )}
      </MenuItem>
    </>
  );
};
