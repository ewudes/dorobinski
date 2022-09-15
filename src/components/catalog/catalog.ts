import Block from "../../utils/block";
import Item from "./item/item";
import Pagination from "../pagination/pagination";

import catalog from "./catalog.tml";
import './catalog.scss'

interface ICatalog {
}

class Catalog extends Block {
  constructor(props?: ICatalog) {
    const item = new Item();
    const pagination = new Pagination();

    super("div", { item, pagination, ...props });
  }

  render() {
    return this.setTemplate(catalog, this.props);
  }
}

export default Catalog;
