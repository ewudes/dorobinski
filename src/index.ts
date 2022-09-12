import render from "./utils/render";

import Home from './pages/home/home';
import Store from "./pages/store/store";
import Error from "./pages/error/error";

import './index.scss';

const currentPath: string = window.location.pathname;

switch(currentPath) {
  case '/':
    render("#app", new Home());
    break;
  case '/store':
    render("#app", new Store());
    break;
  default:
    render("#app", new Error());
}
