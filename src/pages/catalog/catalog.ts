import Block from "../../utils/block";
import Header from "../../components/header/header";

import catalog from "./catalog.tml";
import "./catalog.scss";

class Catalog extends Block {
  constructor(props: Record<string, any> = {}) {
    const header = new Header();

    super("div", { header, ...props });
  }

  render() {
    return this.setTemplate(catalog, this.props);
  }
}

export default Catalog;
