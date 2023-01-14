import Block from "../../core/block";

import filters from "./filters.tml";
import './filters.scss'

interface IFilters {
}

class Filters extends Block {
  constructor(props?: IFilters) {

    console.log(props)
    super("div", props);
  }

  render() {
    return this.setTemplate(filters, this.props);
  }
}

export default Filters;
