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
    const filters = [
      {
        type: "radio",
        legend: "Категории:",
        items: [
          {
            name: "category",
            value: "all",
            id: "category-all",
            label: "Все",
            checked: "checked"
          },
          {
            name: "category",
            value: "promotions",
            id: "category-promotions",
            label: "Акции",
            checked: ""
          },
          {
            name: "category",
            value: "interesting",
            id: "category-interesting",
            label: "Вам будет интересно",
            checked: ""
          },
          {
            name: "category",
            value: "beard",
            id: "category-beard",
            label: "Уход за бородой",
            checked: ""
          }
        ]
      },
      {
        type: "radio",
        legend: "Период:",
        items: [
          {
            name: "period",
            value: "all",
            id: "period-all",
            label: "Все",
            checked: "checked"
          },
          {
            name: "period",
            value: "week",
            id: "period-week",
            label: "Прошлая неделя",
            checked: ""
          },
          {
            name: "period",
            value: "month",
            id: "period-month",
            label: "Прошлый месяц",
            checked: ""
          },
          {
            name: "period",
            value: "year",
            id: "period-year",
            label: "Прошлый год",
            checked: ""
          }
        ]
      }
    ];

    const header = new Header();
    const breadcrumbs = new Breadcrumbs();
    const footer = new Footer();

    const double = new Double({
      aside: new Filters(filters),
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
