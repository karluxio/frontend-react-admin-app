import { SidebarGroupItems } from "@/scenes";

export const SidebarGroups = ({ groups = [] }) => {
  return groups.map(({ title = "", items = [] }) => (
    <SidebarGroupItems key={title} groupTitle={title} itemsData={items} />
  ));
};
