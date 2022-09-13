import Handlebars from "handlebars";

const breadcrumbs = Handlebars.compile(
  `<ul class="breadcrumbs">
    <li class="breadcrumbs__item">
      <a href="index.html">Главная</a>
    </li>
    <li class="breadcrumbs__item">
      <a href="catalog.html">Магазин</a>
    </li>
    <li class="breadcrumbs__item">
      <a href="catalog.html">Средства для ухода</a>
    </li>
  </ul>`
);

export default breadcrumbs;
