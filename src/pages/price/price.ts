import Block from "../../utils/block";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import price from "./price.tml";
import "./price.scss";

class Price extends Block {
  constructor(props: Record<string, any> = {}) {
    const header = new Header();
    const footer = new Footer();

    super("div", { header, footer, ...props });
  }

  render() {
    return this.setTemplate(price, this.props);
  }
}

export default Price;
