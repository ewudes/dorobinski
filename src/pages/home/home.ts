import Block from "../../utils/block";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Features from "../../components/features/features";
import News from "../../components/news/news";
import Gallery from "../../components/gallery/gallery";
import Contacts from "../../components/contacts/contacts";
import Appointment from "../../components/appointment/appointment";

import home from "./home.tml";
import "./home.scss";

class Home extends Block {
  constructor(props: Record<string, any> = {}) {
    const header = new Header();
    const footer = new Footer();
    const features = new Features();
    const news = new News();
    const gallery = new Gallery();
    const contacts = new Contacts();
    const appointment = new Appointment();

    super("div", { header, features, news, gallery, contacts, appointment, footer, ...props });
  }

  render() {
    return this.setTemplate(home, this.props);
  }
}

export default Home;
