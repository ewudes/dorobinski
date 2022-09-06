import Block from "../../utils/block";

import footer from "./footer.tml";
import './footer.scss'

interface IFooter {
}

class Footer extends Block {
  constructor(props?: IFooter) {
    super("div", props);
  }

  render() {
    return this.setTemplate(footer, this.props);
  }
}

export default Footer;
