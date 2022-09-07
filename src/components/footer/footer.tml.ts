import Handlebars from "handlebars";

const footer = Handlebars.compile(
  `<footer class="footer">
    <div class="container">
      <p class="footer__contacts">
        Барбершоп «Бородинский»<br>
        Адрес: г. Санкт-Петербург, Б. Конюшенная, д. 19/8<br>
        <a href="map.html">Как нас найти?</a><br>
        Телефон: +7 (812) 666-02-66
      </p>
      <div class="footer__social">
        <b>Давайте дружить!</b>
        <ul>
          <li><a class="footer__social-button" href="#">Вконтакте</a></li>
          <li><a class="footer__social-button" href="#">Фейсбук</a></li>
          <li><a class="footer__social-button" href="#">Инстаграм</a></li>
        </ul>
      </div>
      <p class="footer__copyright">
        <strong>Не является копированием проекта HTML Academy</strong>
        <strong>Ознакомиться с кодом можно тут:</strong>
        <a class="button__copyright" href="https://github.com/ewudes/borodinski">GitHub</a>
      </p>
    </div>
  </footer>`
);

export default footer;
