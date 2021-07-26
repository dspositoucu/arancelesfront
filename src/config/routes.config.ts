

// components
import Cuentas from '../pages/Cuentas/Cuentas'
import ListaPersonas from '../pages/ListaPersonas/ListaPersonas'
import Informes from '../pages/Informes/Informes'
import LoginPage from '../pages/LoginPage/LoginPage';

import RouteItem from '../models/RouteItem.model';

// define app routes
export const routes: Array<RouteItem> = [
    {
        key: "router-cuentas",
        title: "cuentas",
        tooltip: "Home",
        path: "/cuentas",
        enabled: true,
        component: Cuentas,
        appendDivider: true
    },
    {
        key: "router-personas",
        title: "personas",
        tooltip: "Dashboard",
        path: "/personas",
        enabled: true,
        component: ListaPersonas,
        
    },
    {
        key: "router-informes",
        title: "informes",
        tooltip: "Settings",
        path: "/informes",
        enabled: true,
        component: Informes,
        
    },
]