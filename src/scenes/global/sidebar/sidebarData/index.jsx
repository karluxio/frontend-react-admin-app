import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const itemsData = [
  {
    title: "Manage Team",
    to: "/team",
    icon: <PeopleOutlinedIcon />,
  },
  {
    title: "Contacts Information",
    to: "/contact",
    icon: <ContactsOutlinedIcon />,
  },
  {
    title: "Invoices Balances",
    to: "/invoices",
    icon: <ReceiptOutlinedIcon />,
  },
];

const itemsPages = [
  {
    title: "Profile Form",
    to: "/form",
    icon: <PersonOutlinedIcon />,
  },
  {
    title: "Calendar",
    to: "/calendar",
    icon: <CalendarTodayOutlinedIcon />,
  },
  {
    title: "FAQ Page",
    to: "/faq",
    icon: <HelpOutlineOutlinedIcon />,
  },
];

const itemsCharts = [
  {
    title: "Bar Chart",
    to: "/bar",
    icon: <BarChartOutlinedIcon />,
  },
  {
    title: "Pie Chart",
    to: "/pie",
    icon: <PieChartOutlinedIcon />,
  },
  {
    title: "Line Chart",
    to: "/line",
    icon: <TimelineOutlinedIcon />,
  },
  {
    title: "Geography Chart",
    to: "/geography",
    icon: <MapOutlinedIcon />,
  },
];

export const groupsSidebarData = [
  {
    title: "Data",
    items: itemsData,
  },
  {
    title: "Pages",
    items: itemsPages,
  },
  {
    title: "Charts",
    items: itemsCharts,
  },
];
