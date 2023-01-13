import Block from "../../../core/block";
import Item from "./item/item";
import Pagination from "../pagination/pagination";

import catalog from "./catalog.tml";
import './catalog.scss'

interface ICatalog {
}

class Catalog extends Block {
  constructor(props?: ICatalog) {
    const catalog = [
      {
        item: new Item({
          img: "./img/content/product-1.jpg",
          description: "Набор для путешествий  «Baxter of California»",
          price: 2990,
          category: "shaving"
        }),
      },
      {
        item: new Item({
          img: "./img/content/product-2.jpg",
          description: "Увлажняющий кондиционер  «Baxter of California»",
          price: 1550,
          category: "shaving"
        }),
      },
      {
        item: new Item({
          img: "./img/content/product-3.jpg",
          description: "Гель для волос «SUAVECITO»",
          price: 490,
          category: "shaving"
        }),
      },
      {
        item: new Item({
          img: "./img/content/product-4.jpg",
          description: "Глина для укладки волос  «American crew»",
          price: 990,
          category: "shaving"
        }),
      },
      {
        item: new Item({
          img: "./img/content/product-5.jpg",
          description: "Гель для волос «AMERICAN CREW»",
          price: 3790,
          category: "shaving"
        }),
      },
      {
        item: new Item({
          img: "./img/content/product-6.jpg",
          description: "Набор для бритья «Baxter of California»",
          price: 4830,
          category: "shaving"
        })
      }
    ]
    const pagination = new Pagination();

    super("div", {
      catalog,
      pagination,
      ...props
    });
  }

  render() {
    return this.setTemplate(catalog, this.props);
  }
}

export default Catalog;
