import Block from "../../../../core/block";

import item from "./item.tml";
import "./item.scss";

interface IItem {
  img: string;
  name: string;
  description: string;
}

class Item extends Block {
  constructor(props?: IItem) {
    super("div", props);
  }

  render() {
    return this.setTemplate(item, this.props);
  }
}

export default Item;
