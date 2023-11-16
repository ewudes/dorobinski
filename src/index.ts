import Home from "./templates/pages/home/home";
import Store from "./templates/pages/store/store";
// import Error from "./pages/error/error";
import News from "./templates/pages/news/news";
import Price from "./templates/pages/price/price";
import Contacts from "./templates/pages/contacts/contacts";
import Item from "./templates/pages/item/item";

import router from "./core/router";
import { filterStore, filterNews } from "./mocks/filters";
import { catalog } from "./mocks/catalog";

import "./index.scss";

router
  .use("/", Home)
  .use("/news", News, filterNews)
  .use("/store", Store, [filterStore, catalog])
  .use("/price", Price)
  .use("/contacts", Contacts)
  .use(`/store/item`, Item)
  .start();
