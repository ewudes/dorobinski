import Handlebars from "handlebars";

const item = Handlebars.compile(
  `<li class="catalog-item">
    <a href="catalog-item.html">
      <p class="catalog-item__image">
        <img src="img/product-1.jpg" width="220" height="165" alt="Набор для путешествий «Baxter of California»">
      </p>
      <h3>
        <span class="catalog-item__category">Набор для путешествий</span>
        <span class="catalog-item__title">«Baxter of California»</span>
      </h3>

    </a>
    <p class="catalog-item__price">
      <b>2 900 ₽</b>
      <a class="button" href="#">Купить</a>
    </p>
  </li>`
);

export default item;
