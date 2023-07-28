import { SidebarItem } from "@/scenes";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";

export const SidebarGroupItems = ({ groupTitle = "", itemsData = [] }) => {
  const { colors, selected, setSelected } = useContext(SidebarContext);

  return (
    <>
      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px" }}
      >
        {groupTitle}
      </Typography>
      {itemsData.map(({ title, to, icon }) => (
        <SidebarItem
          key={title}
          title={title}
          to={to}
          icon={icon}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </>
  );
};
