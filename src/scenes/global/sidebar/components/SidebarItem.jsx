import { Typography } from "@mui/material";
import { useContext } from "react";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { SidebarContext } from "@/scenes";

export const SidebarItem = ({ title, to, icon }) => {
  const { selected, setSelected, colors } = useContext(SidebarContext);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};
