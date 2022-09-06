
import render from "./utils/render";

import Home from './pages/home/home';
import './index.scss';

const currentPath: string = window.location.pathname;

switch(currentPath) {
  case '/':
    render("#app", new Home());
    break;
  default:
    render("#app", new Home());
}
