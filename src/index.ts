import render from "./utils/render";

import Home from './pages/home/home';
import Shop from "./pages/store/store";
import './index.scss';

const currentPath: string = window.location.pathname;

switch(currentPath) {
  case '/':
    render("#app", new Home());
    break;
  case '/catalog':
    render("#app", new Shop());
    break;
  default:
    render("#app", new Home());
}
