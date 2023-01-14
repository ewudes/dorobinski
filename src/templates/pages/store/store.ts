import Block from "../../../core/block";
import Header from "../../blocks/header/header";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import Double from "../../layouts/double/double";
import Filters from "../../blocks/filters/filters";
import Catalog from "../../blocks/catalog/catalog";
import Footer from "../../blocks/footer/footer";

import store from "./store.tml";
import "./store.scss";

class Store extends Block {
  constructor(props: Record<string, any> = {}) {
    const header = new Header();
    const breadcrumbs = new Breadcrumbs();
    const footer = new Footer();

    const double = new Double({
      aside: new Filters(),
      main: new Catalog(),
    })

    super("div", { header, breadcrumbs, double, footer, ...props });
  }

  render() {
    return this.setTemplate(store, this.props);
  }
}

export default Store;
