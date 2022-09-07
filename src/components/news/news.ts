import Block from "../../utils/block";

import news from "./news.tml";
import './news.scss'

interface INews {
}

class News extends Block {
  constructor(props?: INews) {
    super("div", props);
  }

  render() {
    return this.setTemplate(news, this.props);
  }
}

export default News;
