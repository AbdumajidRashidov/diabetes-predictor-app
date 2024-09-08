// routes
import { PATH_DASHBOARD } from "../../routes/paths";
// components
import SvgIconStyle from "../../components/SvgIconStyle";

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle
    src={`/static/icons/navbar/${name}.svg`}
    sx={{ width: "100%", height: "100%" }}
  />
);

const ICONS = {
  blog: getIcon("ic_blog"),
  cart: getIcon("ic_cart"),
  chat: getIcon("ic_chat"),
  mail: getIcon("ic_mail"),
  user: getIcon("ic_user"),
  kanban: getIcon("ic_kanban"),
  banking: getIcon("ic_banking"),
  calendar: getIcon("ic_calendar"),
  ecommerce: getIcon("ic_ecommerce"),
  analytics: getIcon("ic_analytics"),
  dashboard: getIcon("ic_dashboard"),
  booking: getIcon("ic_booking"),
};

const sidebarConfig = [
  {
    items: [
      {
        title: "dashboard",
        path: PATH_DASHBOARD.general.app,
        icon: ICONS.dashboard,
      },
    ],
  },
  {
    subheader: "Patients",
    items: [
      {
        title: "Patients",
        path: PATH_DASHBOARD.user.list,
        icon: ICONS.user,
      },
    ],
  },

  // APP
  // ----------------------------------------------------------------------
  {
    subheader: "app",
    items: [
      { title: "chat", path: PATH_DASHBOARD.chat.root, icon: ICONS.chat },
      {
        title: "calendar",
        path: PATH_DASHBOARD.calendar,
        icon: ICONS.calendar,
      },
    ],
  },
];

export default sidebarConfig;
