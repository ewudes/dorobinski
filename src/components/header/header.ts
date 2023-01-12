import Block from "../../utils/block";
import Link from "../link/link";

import header from "./header.tml";
import './header.scss'
import router from "../../utils/router";

interface IHeader {
}

class Header extends Block {
  constructor(props?: IHeader) {

    const infoLink = new Link({
      name: "Информация",
      className: "header__link",
      events: {
        click: () => router.go("/")
      }
    });

    const newsLink = new Link({
      name: "Новости",
      className: "header__link",
      events: {
        click: () => router.go("/news")
      }
    });

    const priceLink = new Link({
      name: "Прайс-лист",
      className: "header__link",
      events: {
        click: () => router.go("/price")
      }
    });

    const storeLink = new Link({
      name: "Магазин",
      className: "header__link",
      events: {
        click: () => router.go("/store")
      }
    });

    const contactsLink = new Link({
      name: "Контакты",
      className: "header__link",
      events: {
        click: () => router.go("/contacts")
      }
    });

    super("div", {
      infoLink,
      newsLink,
      priceLink,
      storeLink,
      contactsLink,
      ...props
    });
  }

  render() {
    return this.setTemplate(header, this.props);
  }
}

export default Header;
