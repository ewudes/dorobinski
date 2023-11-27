import Block from "../../../core/block";
import Item from "./item/item";
import Pagination from "../pagination/pagination";

import catalog from "./catalog.tml";
import "./catalog.scss";

interface ICatalog {
  map: any;
}

class Catalog extends Block {
  constructor(props: ICatalog) {

    const products = props.map((x: any) => ({
      item: new Item({
        ...x
      })
    }));

    const pagination = new Pagination(products);

    super("div", {
      products,
      pagination,
      ...props
    });
  }

  render() {
    return this.setTemplate(catalog, this.props);
  }
}

export default Catalog;
