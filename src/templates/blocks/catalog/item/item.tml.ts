import Handlebars from "handlebars";

const item = Handlebars.compile(
  `<li class="catalog-item">
    <a href="catalog-item.html">
      <p class="catalog-item__image">
        <img src="{{img}}" width="188" height="160" alt="{{description}}">
      </p>
      <h3>
        <span class="catalog-item__category">{{description}}</span>
      </h3>
    </a>
    <p class="catalog-item__price">
      <b class="catalog-item__tag">{{price}} ₽</b>
      <a class="catalog-item__buy" href="#">Купить</a>
    </p>
  </li>`
);

export default item;
