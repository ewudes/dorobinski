import Block from "../../../../core/block";
import Link from "../../../../components/link/link";

import item from "./item.tml";
import "./item.scss";
import router from "../../../../core/router";

interface IItem {
  img: string;
  description: string;
  price: number;
  category: string;
}

class Item extends Block {
  constructor(props?: IItem) {

    const bodyItem = (
      `<p class="catalog-item__image">
        <img src=${props?.img} width="188" height="160" alt=${props?.description}>
      </p>
      <h3>
        <span class="catalog-item__category">${props?.description}</span>
      </h3>`
    );

    const itemLink = new Link({
      name: bodyItem,
      className: "",
      events: {
        click: () => router.go("/item")
      }
    });

    super("div", {
      itemLink,
      ...props
    });
  }

  render() {
    return this.setTemplate(item, this.props);
  }
}

export default Item;
