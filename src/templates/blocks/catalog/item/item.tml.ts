import Handlebars from "handlebars";

const item = Handlebars.compile(
  `<li class="catalog-item">
    {{{itemLink}}}
    <p class="catalog-item__price">
      <b class="catalog-item__tag">{{price}} ₽</b>
      <a class="catalog-item__buy" href="#">Купить</a>
    </p>
  </li>`
);

export default item;
