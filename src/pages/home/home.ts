import Block from "../../utils/block";
import Header from "../../components/header/header";

import home from "./home.tml";
import "./home.scss";

class Home extends Block {
  constructor(props: Record<string, any> = {}) {
    const header = new Header();

    super("div", { header, ...props });
  }

  render() {
    return this.setTemplate(home, this.props);
  }
}

export default Home;
