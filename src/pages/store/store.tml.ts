import Handlebars from "handlebars";

const store = Handlebars.compile(
  `<div class="wrapper">
    {{{header}}}
    <main class="container">
      <h1 class="page-title">Cредства для ухода</h1>
      {{{breadcrumbs}}}
      <div class="catalog-columns">
        {{{filters}}}
        <section class="catalog">
          <h2 class="visually-hidden">Список средств для ухода</h2>
          <ul class="catalog-list">
            <li class="catalog-item">
              <a href="catalog-item.html">
                <h3>
                  <span class="catalog-category">Набор для путешествий</span>
                  <span class="catalog-item-title">«Baxter of California»</span>
                </h3>
                <p class="catalog-item-image">
                  <img src="img/product-1.jpg" width="220" height="165" alt="Набор для путешествий «Baxter of California»">
                </p>
              </a>
              <p class="catalog-item-price">
                <b>2 900 ₽</b>
                <a class="button" href="#">Купить</a>
              </p>
            </li>
            <li class="catalog-item">
              <a href="catalog-item.html">
                <h3>
                  <span class="catalog-category">Увлажняющий кондиционер</span>
                  <span class="catalog-item-title">«Baxter of California»</span>
                </h3>
                <p class="catalog-item-image">
                  <img src="img/product-2.jpg" width="220" height="165" alt="Увлажняющий кондиционер «Baxter of California»">
                </p>
              </a>
              <p class="catalog-item-price">
                <b>750 ₽</b>
                <a class="button" href="#">Купить</a>
              </p>
            </li>
            <li class="catalog-item">
              <a href="catalog-item.html">
                <h3>
                  <span class="catalog-category">Гель для волос</span>
                  <span class="catalog-item-title">«Suavecito»</span>
                </h3>
                <p class="catalog-item-image">
                  <img src="img/product-3.jpg" width="220" height="165" alt="Гель для волос «Suavecito»">
                </p>
              </a>
              <p class="catalog-item-price">
                <b>290 ₽</b>
                <a class="button" href="#">Купить</a>
              </p>
            </li>
            <li class="catalog-item">
              <a href="catalog-item.html">
                <h3>
                  <span class="catalog-category">Глина для укладки волос</span>
                  <span class="catalog-item-title">«American crew»</span>
                </h3>
                <p class="catalog-item-image">
                  <img src="img/product-4.jpg" width="220" height="165" alt="Глина для укладки волос «American crew»">
                </p>
              </a>
              <p class="catalog-item-price">
                <b>500 ₽</b>
                <a class="button" href="#">Купить</a>
              </p>
            </li>
            <li class="catalog-item">
              <a href="catalog-item.html">
                <h3>
                  <span class="catalog-category">Гель для волос</span>
                  <span class="catalog-item-title">«American crew»</span>
                </h3>
                <p class="catalog-item-image">
                  <img src="img/product-5.jpg" width="220" height="165" alt="Гель для волос «American crew»">
                </p>
              </a>
              <p class="catalog-item-price">
                <b>300 ₽</b>
                <a class="button" href="#">Купить</a>
              </p>
            </li>
            <li class="catalog-item">
              <a href="catalog-item.html">
                <h3>
                  <span class="catalog-category">Набор для бритья</span>
                  <span class="catalog-item-title">«Baxter of California»</span>
                </h3>
                <p class="catalog-item-image">
                  <img src="img/product-6.jpg" width="220" height="165" alt="Набор для бритья «Baxter of California»">
                </p>
              </a>
              <p class="catalog-item-price">
                <b>3 900 ₽</b>
                <a class="button" href="#">Купить</a>
              </p>
            </li>
          </ul>
          <ul class="pagination-list">
            <li class="pagination-item"><a href="#">1</a></li>
            <li class="pagination-item pagination-item-current"><a>2</a></li>
            <li class="pagination-item"><a href="#">3</a></li>
            <li class="pagination-item"><a href="#">4</a></li>
          </ul>
        </section>
      </div>
    </main>
  </div>`
);

export default store;
