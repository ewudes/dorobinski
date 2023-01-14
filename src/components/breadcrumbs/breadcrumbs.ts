import Block from "../../core/block";
// @ts-ignore
import { AppRouteTranslation } from "../../utils/const.js";

import breadcrumbs from "./breadcrumbs.tml";
import './breadcrumbs.scss'

interface IBreadcrumbs {
}

class Breadcrumbs extends Block {
  constructor(props?: IBreadcrumbs) {

    const pathname = document.location.pathname.split("/");
    let routes = pathname.splice(1, pathname.length);

    for (let i = 0; i <= routes.length - 1; i++) {
      if (!!AppRouteTranslation[routes[i].toUpperCase()]) {
        routes[i] = AppRouteTranslation[routes[i].toUpperCase()]
      }
    }

    super("div", {routes, ...props});
  }

  render() {
    return this.setTemplate(breadcrumbs, this.props);
  }
}

export default Breadcrumbs;
