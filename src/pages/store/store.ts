import Block from "../../utils/block";
import Header from "../../components/header/header";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Filters from "../../components/filters/filters";
import Catalog from "../../components/catalog/catalog";
import Footer from "../../components/footer/footer";

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
