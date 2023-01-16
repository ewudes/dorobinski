import Handlebars from "handlebars";

const price = Handlebars.compile(
  `<div class="wrapper">
    {{{header}}}
      <main class="container price">
        <h1 class="page-title">Прайс-лист</h1>
        {{{breadcrumbs}}}
        <h2 class="price__title">Истинно мужская классика</h2>
        <section class="price__left">
          <h3 class="price__subtitle">Мы используем только лучшие средства:</h3>
          <ul class="price__products-list">
            <li class="price__products-item">BAXTER OF CALIFORNIA</li>
            <li class="price__products-item">MR NATTY</li>
            <li class="price__products-item">SUAVECITO</li>
            <li class="price__products-item">MALIN+GOETZ</li>
          </ul>
        </section>
        <section class="price__right">
          <h3 class="price__subtitle">Цены на услуги наших мастеров:</h3>
          <table class="price__pricelist">
            <tr class="price__pricerow">
              <td class="price__pricecol">Мужская стрижка</td>
              <td class="price__pricecol">2200р</td>
            </tr>
            <tr class="price__pricerow">
              <td class="price__pricecol">Стрижка бороды/усов</td>
              <td class="price__pricecol">1000р</td>
            </tr>
            <tr class="price__pricerow">
              <td class="price__pricecol">Детская стрижка (от 5 до 12 лет)</td>
              <td class="price__pricecol">1800р</td>
            </tr>
            <tr class="price__pricerow">
              <td class="price__pricecol">Стрижка машинкой</td>
              <td class="price__pricecol">1000</td>
            </tr>
            <tr class="price__pricerow">
              <td class="price__pricecol">Опасное бритье</td>
              <td class="price__pricecol">2000</td>
            </tr>
            <tr class="price__pricerow">
              <td class="price__pricecol">Укладка</td>
              <td class="price__pricecol">1000</td>
            </tr>
            <tr class="price__pricerow">
              <td class="price__pricecol">Подарочный сертификат</td>
              <td class="price__pricecol">от 2000р</td>
            </tr>
          </table>
        </section>
        <h3 class="price__subtitle">Несколько слов о нас:</h3>
        <p class="price__about">Наша парикмахерская занимается исключительно мужскими стрижками. Стрижка каждого клиента для нас - это уникальная и продуманная до мелочей работа. Мы не работаем на количество, мы делаем качество.</p>
        <p class="price__about">Мы располагаемся в центре города, поэтому сделать стильную стрижку можно в любое время, даже в обеденный перерыв. Здесь вы можете погрузиться в удобную для вас атмосферу, чувствовать себя комфортно и свободно.</p>
      </main>
    {{{footer}}}
  </div>`
);

export default price;
