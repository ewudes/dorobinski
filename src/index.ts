import render from "./utils/render";

import Home from './pages/home/home';
import Store from "./pages/store/store";
import Error from "./pages/error/error";
import News from "./pages/news/news";
import Price from "./pages/price/price";
import Contacts from "./pages/contacts/contacts";

import './index.scss';

const currentPath: string = window.location.pathname;

switch(currentPath) {
  case '/':
    render("#app", new Home());
    break;
  case '/news':
    render("#app", new News());
    break;
  case '/store':
    render("#app", new Store());
    break;
  case '/price':
    render("#app", new Price());
    break;
  case '/contacts':
    render("#app", new Contacts());
    break;
  default:
    render("#app", new Error());
}
