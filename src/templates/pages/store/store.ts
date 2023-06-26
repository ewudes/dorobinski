import Block from "../../../core/block";
import Header from "../../blocks/header/header";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import Double from "../../layouts/double/double";
import Filters from "../../../components/filters/filters";
import Catalog from "../../blocks/catalog/catalog";
import Footer from "../../blocks/footer/footer";

import store from "./store.tml";
import "./store.scss";

class Store extends Block {
  constructor(props: Record<string, any> = {}) {
    const header = new Header();
    const breadcrumbs = new Breadcrumbs();
    const footer = new Footer();

    const filters = [
      {
        type: "checkbox",
        legend: "Производители:",
        items: [
          {
            name: "baxter-of-california",
            id: "filter-baxter-of-california",
            label: "Baxter of California",
            checked: "checked"
          },
          {
            name: "mr-natty",
            id: "filter-mr-natty",
            label: "Mr Natty",
            checked: ""
          },
          {
            name: "suavecito",
            id: "filter-suavecito",
            label: "Suavecito",
            checked: "checked"
          },
          {
            name: "malin-goetz",
            id: "filter-malin-goetz",
            label: "Malin+Goetz",
            checked: ""
          },
          {
            name: "murrays",
            id: "filter-murrays",
            label: "Murray's",
            checked: ""
          },
          {
            name: "american-crew",
            id: "filter-american-crew",
            label: "American Crew",
            checked: ""
          }
        ]
      },
      {
        type: "radio",
        legend: "Группы товаров:",
        items: [
          {
            name: "groups-product",
            value: "all",
            id: "groups-all",
            label: "Все",
            checked: "checked"
          },
          {
            name: "groups-product",
            value: "shaving",
            id: "groups-shaving",
            label: "Бритвенные принадлежности",
            checked: ""
          },
          {
            name: "groups-product",
            value: "hair-care",
            id: "groups-care",
            label: "Средства для ухода",
            checked: ""
          },
          {
            name: "groups-product",
            value: "accessories",
            id: "groups-accessories",
            label: "Аксессуары",
            checked: ""
          }
        ]
      }
    ];

    const double = new Double({
      aside: new Filters(filters),
      main: new Catalog(),
    });

    super("div", { header, breadcrumbs, double, footer, ...props });
  }

  render() {
    return this.setTemplate(store, this.props);
  }
}

export default Store;
