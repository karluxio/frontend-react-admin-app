import { SidebarContext, SidebarGroupItems } from "@/scenes";
import { useContext } from "react";

export const SidebarGroups = ({ groups = [] }) => {
  const { selected, setSelected, colors } = useContext(SidebarContext);

  return groups.map(({ title = "", items = [] }) => (
    <SidebarGroupItems
      key={title}
      groupTitle={title}
      itemsData={items}
      selected={selected}
      setSelected={setSelected}
      colors={colors}
    />
  ));
};
