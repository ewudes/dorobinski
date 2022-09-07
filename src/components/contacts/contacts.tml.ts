import Handlebars from "handlebars";

const contacts = Handlebars.compile(
  `<section class="contacts">
    <h2>Контактная информация</h2>
    <p>
      Барбершоп «Бородинский»<br>
      Адрес: г. Санкт-Петербург, Б. Конюшенная, д. 19/8<br>
      Телефон: +7 (812) 666-02-66
    </p>
    <p>
      Время работы:<br>
      пн—пт: с 10:00 до 22:00<br>
      сб—вс: с 10:00 до 19:00
    </p>
    <a class="button" href="map.html">Как проехать</a>
    <a class="button" href="contacts.html">Обратная связь</a>
  </section>`
);

export default contacts;
