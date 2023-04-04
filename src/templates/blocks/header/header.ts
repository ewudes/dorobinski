import Block from "../../../core/block";
import Link from "../../../components/link/link";
import Button from "../../../components/button/button";
import Hamburger from "../../../components/hamburger/hamburger";
import Popup from "../popup/popup";

import header from "./header.tml";
import './header.scss'
import router from "../../../core/router";

interface IHeader {
}

class Header extends Block {
  constructor(props?: IHeader) {

    function showMenu() {
      const btnClose = document.querySelector(".hamburger") as HTMLDivElement;
      btnClose.classList.toggle('not-active');
      btnClose.classList.toggle('active');
    }

    const btnMenu = new Hamburger({
      events: {
        click: () => showMenu()
      }
    });

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

    const showLoginForm = () => {
      const wrapper = document.querySelector(".wrapper") as HTMLDivElement;
      const popup = new Popup().getElement();
      wrapper.appendChild(popup)
    }

    const login = new Button({
      className: "header__login",
      text: "Вход",
      events: {
        click: () => showLoginForm()
      }
    });

    super("div", {
      infoLink,
      newsLink,
      priceLink,
      storeLink,
      login,
      contactsLink,
      btnMenu,
      ...props
    });
  }

  render() {
    return this.setTemplate(header, this.props);
  }
}

export default Header;
