import Block from "../../../core/block";
import Item from "./item/item";

import staff from "./staff.tml";
import './staff.scss'

interface IStaff {
}

class Staff extends Block {
  constructor(props?: IStaff) {
    const staff = [
      {
        item: new Item({
          img: "./img/avatar_pic.png",
          name: "Зафар",
          description: "Мастер сурового шика"
        }),
      },
      {
        item: new Item({
          img: "./img/avatar_pic.png",
          name: "Одил",
          description: "Мастер с тонким вкусом"
        }),
      },
      {
        item: new Item({
          img: "./img/avatar_pic.png",
          name: "Валерий",
          description: "Тату мастер высшего уровня"
        }),
      },
      {
        item: new Item({
          img: "./img/avatar_pic.png",
          name: "Денис",
          description: "Гид по мужскому стилю"
        }),
      },
      {
        item: new Item({
          img: "./img/avatar_pic.png",
          name: "Бахром",
          description: "Гид по мужскому стилю"
        }),
      },
      {
        item: new Item({
          img: "./img/avatar_pic.png",
          name: "Хусейн",
          description: "Гид по мужскому стилю"
        })
      }
    ];

    super("div", {
      staff,
      ...props
    });
  }

  render() {
    return this.setTemplate(staff, this.props);
  }
}

export default Staff;
