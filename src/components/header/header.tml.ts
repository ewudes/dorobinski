import Handlebars from "handlebars";

const header = Handlebars.compile(
  `<header class="header">
    <nav class="header__nav">
      <div class="header__nav-wrapper">
        <div class="container">
          <ul class="header__items">
            <li class="header__item">
              <a href="info.html" class="header__link">Информация</a>
            </li>
            <li class="header__item">
              <a href="news.html" class="header__link">Новости</a>
            </li>
            <li class="header__item">
              <a href="price.html" class="header__link">Прайс-лист</a>
            </li>
            <li class="header__item">
              <a href="catalog.html" class="header__link">Магазин</a>
            </li>
            <li class="header__item">
              <a href="contacts.html" class="header__link">Контакты</a>
            </li>
          </ul>
          <ul class="header__btns">
            <li><a class="header__login" href="login.html">Вход</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>`
);

export default header;
