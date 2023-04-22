import config from "../config";
import HomePage from "../pages/Home";
import DiscoverPage from "../pages/Discover";
import MessagePage from "../pages/Message";
import ReelsPage from "../pages/Reels";
import ProfilePage from "../pages/Profile";
import SearchPage from "../pages/Search";
import NotificationPage from "../pages/Notification";

const publicRoutes = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.search, component: SearchPage },
  { path: config.routes.discover, component: DiscoverPage },
  { path: config.routes.message, component: MessagePage },
  { path: config.routes.reels, component: ReelsPage },
  { path: config.routes.notification, component: NotificationPage },
  { path: config.routes.profile, component: ProfilePage },
];

export { publicRoutes };
