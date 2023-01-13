import Home from './templates/pages/home/home';
import Store from "./templates/pages/store/store";
// import Error from "./pages/error/error";
import News from "./templates/pages/news/news";
import Price from "./templates/pages/price/price";
import Contacts from "./templates/pages/contacts/contacts";

import router from "./core/router";

import './index.scss';

router
  .use("/", Home)
  .use("/news", News)
  .use("/store", Store)
  .use("/price", Price)
  .use("/contacts", Contacts)
  .start();
