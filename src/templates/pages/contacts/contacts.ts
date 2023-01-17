import Block from "../../../core/block";
import Header from "../../blocks/header/header";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import Staff from "../../blocks/staff/staff";
import Footer from "../../blocks/footer/footer";

import contacts from "./contacts.tml";
import "./contacts.scss";

class Contacts extends Block {
  constructor(props: Record<string, any> = {}) {
    const header = new Header();
    const breadcrumbs = new Breadcrumbs();
    const staff = new Staff();
    const footer = new Footer();

    super("div", { header, breadcrumbs, staff, footer, ...props });
  }

  render() {
    return this.setTemplate(contacts, this.props);
  }
}

export default Contacts;
