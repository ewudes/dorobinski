import Block from "../../../core/block";

import double from "./double.tml";
import "./double.scss";

class Double extends Block {
  constructor(props: Record<string, any> = {}) {

    super("div", {

      ...props
    });
  }

  render() {
    return this.setTemplate(double, this.props);
  }
}

export default Double;
