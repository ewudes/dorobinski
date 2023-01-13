import Block from "../../core/block";

import button from "./button.tml";

interface IContacts {
}

class Button extends Block {
  constructor(props?: IContacts) {
    super("div", props);
  }

  render() {
    return this.setTemplate(button, this.props);
  }
}

export default Button;
