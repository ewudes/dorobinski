import Block from "../../utils/block";

import pagination from "./pagination.tml";
import './pagination.scss'

interface IPagination {
}

class Pagination extends Block {
  constructor(props?: IPagination) {
    super("div", props );
  }

  render() {
    return this.setTemplate(pagination, this.props);
  }
}

export default Pagination;
