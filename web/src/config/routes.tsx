import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as solid_icons from "@fortawesome/free-solid-svg-icons";

export type routes_type = {
  [keys: string]: {
    route: string,
    title: string,
    icon: any,
    module_name: string,
    access: Array<"auth">
    tags: Array<
      "top_panel"
    >
  }
}

export const routes = {
  "home": {
    route: "/",
    title: "Home",
    icon: <FontAwesomeIcon icon={solid_icons.faHome}/>,
    module_name: "main",
    access: ["auth"],
    tags: ["top_panel"]
  },
  "about": {
    route: "/about",
    title: "About",
    icon: <FontAwesomeIcon icon={solid_icons.faFingerprint}/>,
    module_name: "about",
    access: ["auth"],
    tags: ["top_panel"]
  },
  "portfolio": {
    route: "/portfolio",
    title: "Portfolio",
    icon: <FontAwesomeIcon icon={solid_icons.faFingerprint}/>,
    module_name: "portfolio",
    access: ["auth"],
    tags: ["top_panel"]
  },
  "blog": {
    route: "/blog",
    title: "Blog",
    icon: <FontAwesomeIcon icon={solid_icons.faFingerprint}/>,
    module_name: "blog",
    access: ["auth"],
    tags: ["top_panel"]
  },
} satisfies routes_type

export type routes_keys = keyof typeof routes
export type routes_values = typeof routes[keyof typeof routes]
export const routes_entries =
  Object.entries(routes) as [routes_keys, routes_values][]