import Handlebars from "handlebars";

const item = Handlebars.compile(
  `<div class="wrapper">
    {{{header}}}
    <main class="container">
      <h1 class="page-title">Набор для путешествий «Baxter of California»</h1>
      {{{breadcrumbs}}}
      <div class="item__columns">
        <section class="item__photos">
          <h2 class="visually-hidden">Изображения товара</h2>
          <p class="item__photo-full">
            <img src="./img/content/product-1.jpg" width="460" height="498" alt="Фото всего набора">
          </p>
          <ul class="item__photo-preview">
            <li>
              <img src="./img/content/product-2.jpg" width="140" height="149" alt="Фото в анфас">
            </li>
            <li>
              <img src="./img/content/product-3.jpg" width="140" height="149" alt="Фото в профиль">
            </li>
            <li>
              <img src="./img/content/product-4.jpg" width="140" height="149" alt="Фото отдельной части">
            </li>
          </ul>
        </section>
        <section class="item__info">
          <h2 class="visually-hidden">Описание товара</h2>
          <div class="item__description">
            <p class="item__availability">Есть в наличии</p>
            <p class="item__article">Артикул: dexter-ae</p>
          </div>
          <p class="item__text">Travel Kit – необходимый аксессуар во время любого путешествия. В аккуратной кожаной сумке находится все, что нужно для бритья и ухода за кожей во время рабочей поездки или отдыха: средство для умывания, увлажняющий крем, крем для бритья, крем после бритья, шампунь. Набор также может стать отличным подарком.</p>
          <p class="item__price">
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
    </main>
    {{{footer}}}
  </div>`
);

export default item;
