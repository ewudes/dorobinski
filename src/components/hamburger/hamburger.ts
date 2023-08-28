import Block from "../../core/block";
import hamburger from "./hamburger.tml";
import "./hamburger.scss";

interface IHamburger {
  events?: { click: (e: Event) => void };
}

class Hamburger extends Block {
  constructor(props: IHamburger) {
    super("div", props);
  }

  render() {
    return this.setTemplate(hamburger, this.props);
  }
}

export default Hamburger;
