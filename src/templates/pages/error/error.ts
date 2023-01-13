import Block from "../../../core/block";
import Header from "../../blocks/header/header";
import Footer from "../../blocks/footer/footer";

import error from "./error.tml";
import "./error.scss";

class Error extends Block {
  constructor(props: Record<string, any> = {}) {
    const header = new Header();
    const footer = new Footer();

    super("div", { header, footer, ...props });
  }

  render() {
    return this.setTemplate(error, this.props);
  }
}

export default Error;
