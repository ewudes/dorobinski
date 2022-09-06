import Handlebars from "handlebars";

const footer = Handlebars.compile(
  `<footer class="main-footer">
    <div class="container">
      <p class="footer-contacts">
        Барбершоп «Бородинский»<br>
        Адрес: г. Санкт-Петербург, Б. Конюшенная, д. 19/8<br>
        <a href="map.html">Как нас найти?</a><br>
        Телефон: +7 (812) 666-02-66
      </p>
      <div class="footer-social">
        <b>Давайте дружить!</b>
        <ul>
          <li><a class="social-button" href="#">Вконтакте</a></li>
          <li><a class="social-button" href="#">Фейсбук</a></li>
          <li><a class="social-button" href="#">Инстаграм</a></li>
        </ul>
      </div>
      <p class="footer-copyright">
        <b>Разработано:</b> <a class="button" href="https://htmlacademy.ru">HTML Academy</a>
      </p>
    </div>
  </footer>`
);

export default footer;
