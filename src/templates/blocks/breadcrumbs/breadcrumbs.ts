import Block from "../../../core/block";

import breadcrumbs from "./breadcrumbs.tml";
import './breadcrumbs.scss'

interface IBreadcrumbs {
}

class Breadcrumbs extends Block {
  constructor(props?: IBreadcrumbs) {

    console.log(document.location)
    super("div", props);
  }

  render() {
    return this.setTemplate(breadcrumbs, this.props);
  }
}

export default Breadcrumbs;
