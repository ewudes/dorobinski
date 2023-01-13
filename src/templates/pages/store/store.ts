import Block from "../../../core/block";
import Header from "../../blocks/header/header";
import Breadcrumbs from "../../blocks/breadcrumbs/breadcrumbs";
import Filters from "../../blocks/filters/filters";
import Catalog from "../../blocks/catalog/catalog";
import Footer from "../../blocks/footer/footer";

import store from "./store.tml";
import "./store.scss";

class Store extends Block {
  constructor(props: Record<string, any> = {}) {
    const header = new Header();
    const breadcrumbs = new Breadcrumbs();
    const filters = new Filters();
    const catalog = new Catalog();
    const footer = new Footer();

    super("div", { header, breadcrumbs, filters, catalog, footer, ...props });
  }

  render() {
    return this.setTemplate(store, this.props);
  }
}

export default Store;
