import { FaHome, FaChartBar, FaCartArrowDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";

export const sidebarData = [
  {
    id: 1,
    itemName: "Dashboard",
    link: "/",
    icon: FaHome,
    subItems: [],
  },
  {
    id: 2,
    itemName: "Reports",
    link: "",
    icon: TbReportSearch,
    subItems: [
      { id: 1, subName: "Test Page", link: "/test" },
      { id: 1, subName: "Report Two", link: "" },
      { id: 1, subName: "Report Three", link: "" },
      { id: 1, subName: "Report Four", link: "" },
    ],
  },
  {
    id: 3,
    itemName: "Orders",
    link: "",
    icon: FaChartBar,
    subItems: [
      { id: 1, subName: "Order One", link: "" },
      { id: 1, subName: "Order Two", link: "" },
      { id: 1, subName: "Order Three", link: "" },
      { id: 1, subName: "Order Four", link: "" },
    ],
  },
  {
    id: 2,
    itemName: "Test Page",
    link: "/test",
    icon: TbReportSearch,
    subItems: [],
  },
  {
    id: 3,
    itemName: "Orders",
    link: "",
    icon: FaChartBar,
    subItems: [
      { id: 1, subName: "Order One", link: "" },
      { id: 1, subName: "Order Two", link: "" },
      { id: 1, subName: "Order Three", link: "" },
      { id: 1, subName: "Order Four", link: "" },
    ],
  },
  {
    id: 2,
    itemName: "Reports",
    link: "",
    icon: TbReportSearch,
    subItems: [
      { id: 1, subName: "Report One", link: "" },
      { id: 1, subName: "Report Two", link: "" },
      { id: 1, subName: "Report Three", link: "" },
      { id: 1, subName: "Report Four", link: "" },
    ],
  },
  {
    id: 3,
    itemName: "Orders",
    link: "",
    icon: FaChartBar,
    subItems: [
      { id: 1, subName: "Order One", link: "" },
      { id: 1, subName: "Order Two", link: "" },
      { id: 1, subName: "Order Three", link: "" },
      { id: 1, subName: "Order Four", link: "" },
    ],
  },
];
