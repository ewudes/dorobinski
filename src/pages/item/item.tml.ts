import Handlebars from "handlebars";

const item = Handlebars.compile(
  `<main class="container">
    <h1 class="page-title">Набор для путешествий «Baxter of California»</h1>
    <ul class="breadcrumbs">
      <li><a href="index.html">Главная</a></li>
      <li><a href="#">Магазин</a></li>
      <li><a href="#">Средства для ухода</a></li>
      <li class="breadcrumbs-current">Набор для путешествий «Baxter of California»</li>
    </ul>
    <div class="catalog-columns">
      <section class="product-photos">
        <h2 class="visually-hidden">Изображения товара</h2>
        <p class="product-photo-full">
          <img src="img/product-big.jpg" width="460" height="498" alt="Фото всего набора">
        </p>
        <ul class="product-photo-preview">
          <li>
            <img src="img/product-small-1.jpg" width="140" height="149" alt="Фото в анфас">
          </li>
          <li>
            <img src="img/product-small-2.jpg" width="140" height="149" alt="Фото в профиль">
          </li>
          <li>
            <img src="img/product-small-3.jpg" width="140" height="149" alt="Фото отдельной части">
          </li>
        </ul>
      </section>
      <section class="product-info">
        <h2 class="visually-hidden">Описание товара</h2>
        <div class="product-description">
          <p class="product-availability">Есть в наличии</p>
          <p class="product-article">Артикул: dexter-ae</p>
        </div>
        <p class="product-text">Travel Kit – необходимый аксессуар во время любого путешествия. В аккуратной кожаной сумке находится все, что нужно для бритья и ухода за кожей во время рабочей поездки или отдыха: средство для умывания, увлажняющий крем, крем для бритья, крем после бритья, шампунь. Набор также может стать отличным подарком.</p>
        <p class="product-price">
          <b>2 900 ₽</b>
          <a class="button" href="#">Купить</a>
        </p>
        <h3>В набор входят:</h3>
        <ul>
          <li>Средство для умывания (50 мл)</li>
          <li>Увлажняющий крем (50 мл)</li>
          <li>Крем для бритья (50 мл)</li>
          <li>Крем после бритья, шампунь (50 мл)</li>
          <li>Удобная кожаная косметичка</li>
        </ul>
      </section>
    </div>
</main>`
);

export default item;
