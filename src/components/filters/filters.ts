import Block from "../../core/block";
import Button from "../button/button"

import filters from "./filters.tml";
import "./filters.scss";

interface IFilters {
}

class Filters extends Block {
  constructor(props?: IFilters) {

    const showFilter = () => {
      const filter = document.querySelector(".filter") as HTMLDivElement;
      filter.classList.toggle('filter__active');
    }

    const btnFilter = new Button({
      className: "filters__show-btn",
      text: "Фильтр",
      events: {
        click: () => showFilter()
      }
    });

    super("div", {
      btnFilter,
      ...props
    });
  }

  render() {
    return this.setTemplate(filters, this.props);
  }
}

export default Filters;
