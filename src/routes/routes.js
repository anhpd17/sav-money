import config from "../config";

// pages
import Home from "../pages/Home";
import Account from "../pages/Account";
import Login from "../pages/Login";
import Report from "../pages/Report";
import History from "../pages/History";
import DefaultLayout from "../components/Layout/DefaultLayout";

// public routes
const publicRoutes = [
    { path: config.routes.home, component: Home, layout: DefaultLayout },
    { path: config.routes.account, component: Account, layout: DefaultLayout },
    { path: config.routes.login, component: Login, layout: DefaultLayout },
    { path: config.routes.report, component: Report, layout: DefaultLayout },
    { path: config.routes.history, component: History, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
