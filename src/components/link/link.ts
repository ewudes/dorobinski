import Block from "../../core/block";
import link from "./link.tml";

interface ILink {
  className: string;
  name: string;
  events?: { click: (e: Event) => void };
}

class Link extends Block {
  constructor(props: ILink) {
    super("div", props);
  }

  render() {
    return this.setTemplate(link, this.props);
  }
}

export default Link;
