import Block from "../../../core/block";
import Header from "../../blocks/header/header";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import Footer from "../../blocks/footer/footer";

import news from "./news.tml";
import "./news.scss";
import Double from "../../layouts/double/double";
import Filters from "../../../components/filters/filters";
import Feeds from "../../blocks/feeds/feeds";

class News extends Block {
  constructor(props: Record<string, any> = {}) {

    const header = new Header();
    const breadcrumbs = new Breadcrumbs();
    const footer = new Footer();

    const double = new Double({
      aside: new Filters(props),
      main: new Feeds(),
    });

    super("div", {
      header,
      breadcrumbs,
      double,
      footer,
      ...props
    });
  }

  render() {
    return this.setTemplate(news, this.props);
  }
}

export default News;
