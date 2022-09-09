import render from "./utils/render";

import Home from './pages/home/home';
import Catalog from "./pages/catalog/catalog";
import './index.scss';

const currentPath: string = window.location.pathname;

switch(currentPath) {
  case '/':
    render("#app", new Home());
    break;
  case '/catalog':
    render("#app", new Catalog());
    break;
  default:
    render("#app", new Home());
}
