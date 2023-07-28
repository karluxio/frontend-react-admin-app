import React from "react";
import { useContext } from "react";
import { SidebarContext } from "@/scenes";
import { Box, IconButton, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export const SidebarHeaderTitle = ({ title = "Menu" }) => {
  const { colors, isCollapsed, setIsCollapsed } = useContext(SidebarContext);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      ml="15px"
    >
      <Typography variant="h3" color={colors.grey[100]}>
        {title}
      </Typography>

      <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
        <MenuOutlinedIcon />
      </IconButton>
    </Box>
  );
};
