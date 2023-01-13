import Block from "../../../core/block";
import Header from "../../blocks/header/header";
import Breadcrumbs from "../../blocks/breadcrumbs/breadcrumbs";
import Footer from "../../blocks/footer/footer";

import news from "./news.tml";
import "./news.scss";

class News extends Block {
  constructor(props: Record<string, any> = {}) {
    const header = new Header();
    const breadcrumbs = new Breadcrumbs();
    const footer = new Footer();

    super("div", {
      header,
      breadcrumbs,
      footer,
      ...props
    });
  }

  render() {
    return this.setTemplate(news, this.props);
  }
}

export default News;
