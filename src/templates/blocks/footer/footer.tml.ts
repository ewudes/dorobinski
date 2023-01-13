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
        <div>Давайте дружить!</div>
        <ul class="footer__social-links">
          <li class="footer__social-link"><a class="footer__social-button footer__social-button--vk" href="#">Вконтакте</a></li>
          <li class="footer__social-link"><a class="footer__social-button footer__social-button--fb" href="#">Фейсбук</a></li>
          <li class="footer__social-link"><a class="footer__social-button footer__social-button--inst" href="#">Инстаграм</a></li>
        </ul>
      </div>
      <p class="footer__copyright">
        <strong>Не является копированием проекта HTML Academy</strong>
        <strong>Ознакомиться с кодом можно тут:</strong>
        <a class="button__copyright" href="https://github.com/ewudes/dorobinski">GitHub</a>
      </p>
    </div>
  </footer>`
);

export default footer;
