import Block from "../../../core/block";
import Header from "../../blocks/header/header";

import item from "./item.tml";
import "./item.scss";

class Item extends Block {
  constructor(props: Record<string, any> = {}) {
    const header = new Header();

    super("div", { header, ...props });
  }

  render() {
    return this.setTemplate(item, this.props);
  }
}

export default Item;
