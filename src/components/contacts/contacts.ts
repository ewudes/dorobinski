import Block from "../../utils/block";

import contacts from "./contacts.tml";
import './contacts.scss'

interface IContacts {
}

class Contacts extends Block {
  constructor(props?: IContacts) {
    super("div", props);
  }

  render() {
    return this.setTemplate(contacts, this.props);
  }
}

export default Contacts;
