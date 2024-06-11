import Admin from './pages/Admin'
import Basket from './pages/Basker'
import GroupsShop from './pages/GroupsShop'
import Auth from './pages/Auth'
import GroupPage from './pages/GroupPage'

import { ADMIN_ROUTE, BASKET_ROUTE, GROUPS_SHOP_ROUTE, GROUP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]

export const publicRoutes = [
    {
        path: GROUPS_SHOP_ROUTE,
        Component: GroupsShop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: GROUP_ROUTE + '/:id',
        Component: GroupPage
    },
]