import Block from "../../utils/block";

import header from "./header.tml";
import './header.scss'

interface IHeader {
}

class Header extends Block {
  constructor(props?: IHeader) {
    super("div", props);
  }

  render() {
    return this.setTemplate(header, this.props);
  }
}

export default Header;
