import Block from "../../../core/block";
import Item from "./item/item";
import Pagination from "../pagination/pagination";

import feeds from "./feeds.tml";
import "./feeds.scss";

interface IFeeds {
}

class Feeds extends Block {
  constructor(props?: IFeeds) {
    const feeds = [
      {
        item: new Item({
          img: "./img/content/product-1.jpg",
          description: "Секреты мягкой и послушной бороды",
          price: 2990,
          category: "shaving"
        }),
      },
      {
        item: new Item({
          img: "./img/content/product-2.jpg",
          description: "Мы наконец завезли ягермейстер!",
          price: 1550,
          category: "shaving"
        }),
      },
      {
        item: new Item({
          img: "./img/content/product-3.jpg",
          description: "Секреты мягкой и послушной бороды",
          price: 490,
          category: "shaving"
        }),
      },
      {
        item: new Item({
          img: "./img/content/product-4.jpg",
          description: "Секреты мягкой и послушной бороды",
          price: 990,
          category: "shaving"
        }),
      }
    ]
    const pagination = new Pagination();

    super("div", {
      feeds,
      pagination,
      ...props
    });
  }

  render() {
    return this.setTemplate(feeds, this.props);
  }
}

export default Feeds;
