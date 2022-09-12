import Block from "../../utils/block";

import catalog from "./catalog.tml";
import './catalog.scss'

interface ICatalog {
}

class Catalog extends Block {
  constructor(props?: ICatalog) {
    super("div", props);
  }

  render() {
    return this.setTemplate(catalog, this.props);
  }
}

export default Catalog;
