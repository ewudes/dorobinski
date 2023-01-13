import Block from "../../../core/block";
import Header from "../../blocks/header/header";
import Footer from "../../blocks/footer/footer";
import Features from "../../blocks/features/features";
import News from "../../blocks/news/news";
import Gallery from "../../blocks/gallery/gallery";
import Contacts from "../../blocks/contacts/contacts";
import Appointment from "../../blocks/appointment/appointment";
// import Popup from "../../components/popup/popup";

import home from "./home.tml";
import "./home.scss";
// import router from "../../utils/router";
// import Link from "../../components/link/link";

class Home extends Block {
  constructor(props: Record<string, any> = {}) {
    const header = new Header();
    const features = new Features();
    const news = new News();
    const gallery = new Gallery();
    const contacts = new Contacts();
    const appointment = new Appointment();
    const footer = new Footer();
    // const popup = new Popup();

    super("div", {
      header,
      features,
      news,
      gallery,
      contacts,
      appointment,
      footer,
      ...props
    });
  }

  render() {
    return this.setTemplate(home, this.props);
  }
}

export default Home;
