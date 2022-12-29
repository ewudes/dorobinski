import Home from './pages/home/home';
import Store from "./pages/store/store";
// import Error from "./pages/error/error";
import News from "./pages/news/news";
import Price from "./pages/price/price";
import Contacts from "./pages/contacts/contacts";

import router from "./utils/router";

import './index.scss';

router
  .use("/", Home)
  .use("/news", News)
  .use("/store", Store)
  .use("/price", Price)
  .use("/contacts", Contacts)
  .start();
