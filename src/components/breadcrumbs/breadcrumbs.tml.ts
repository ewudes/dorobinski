import Handlebars from "handlebars";

const breadcrumbs = Handlebars.compile(
  `<ul class="breadcrumbs">
    <li>
      <a href="index.html">Главная</a>
    </li>
    <li>
      <a href="catalog.html">Магазин</a>
    </li>
  </ul>`
);

export default breadcrumbs;
