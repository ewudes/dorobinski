import Block from "../../utils/block";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import news from "./news.tml";
import "./news.scss";

class News extends Block {
  constructor(props: Record<string, any> = {}) {
    const header = new Header();
    const footer = new Footer();

    super("div", { header, footer, ...props });
  }

  render() {
    return this.setTemplate(news, this.props);
  }
}

export default News;
