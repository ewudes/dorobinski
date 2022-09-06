import Handlebars from "handlebars";

const header = Handlebars.compile(
  `<header class="main-header">
    <nav class="main-navigation">
      <a class="main-header-logo">
        <img src="img/index-logo.svg" width="368" height="153" alt="Логотип барбершопа «Бородинский»">
      </a>
      <div class="main-navigation-wrapper">
        <div class="container">
          <ul class="site-navigation">
            <li><a href="info.html">Информация</a></li>
            <li><a href="news.html">Новости</a></li>
            <li><a href="price.html">Прайс-лист</a></li>
            <li><a href="catalog.html">Магазин</a></li>
            <li><a href="contacts.html">Контакты</a></li>
          </ul>
          <ul class="user-navigation">
            <li><a class="login-link" href="login.html">Вход</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>`
);

export default header;
