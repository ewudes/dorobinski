import Block from "../../utils/block";

import breadcrumbs from "./breadcrumbs.tml";
import './breadcrumbs.scss'

interface IBreadcrumbs {
}

class Breadcrumbs extends Block {
  constructor(props?: IBreadcrumbs) {
    super("div", props);
  }

  render() {
    return this.setTemplate(breadcrumbs, this.props);
  }
}

export default Breadcrumbs;
