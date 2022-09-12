import Block from "../../utils/block";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

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
