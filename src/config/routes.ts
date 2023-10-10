import Home from '../pages/Home'
import Inventory from '../pages/Inventory'
import WineTypes from '../pages/Wine_Types'
import Wineries from '../pages/Wineries'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
    },
    {
      path: "/inventory",
      component: Inventory,
      name: "Inventory",
    },
    {
      path: "/winetypes",
      component: WineTypes,
      name: "Wine Types",
    },
    {
      path: "/wineries",
      component: Wineries,
      name: "Local Wineries",
    }
];

export default routes