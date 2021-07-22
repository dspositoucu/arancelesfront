

// components
import Cuentas from '../pages/Cuentas/Cuentas'
import ListaPersonas from '../pages/ListaPersonas/ListaPersonas'
import Informes from '../pages/Informes/Informes'
import LoginPage from '../pages/LoginPage/LoginPage';

import RouteItem from '../models/RouteItem.model';

// define app routes
export const routes: Array<RouteItem> = [
    {
        key: "router-home",
        title: "Home",
        tooltip: "Home",
        path: "/cuentas",
        enabled: true,
        component: Cuentas,
        appendDivider: true
    },
    {
        key: "router-dashboard",
        title: "Dashboard",
        tooltip: "Dashboard",
        path: "/personas",
        enabled: true,
        component: ListaPersonas,
        
    },
    {
        key: "router-settings",
        title: "Settings",
        tooltip: "Settings",
        path: "/informes",
        enabled: true,
        component: Informes,
        
    },
]