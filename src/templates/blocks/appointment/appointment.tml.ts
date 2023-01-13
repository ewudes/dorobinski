import Handlebars from "handlebars";

const appointment = Handlebars.compile(
  `<section class="appointment">
    <h2 class="appointment__title">Записаться</h2>
    <p class="appointment__info">Укажите желаемую дату и время и мы свяжемся с вами для подтверждения брони</p>
    <form class="appointment__form" action="https://echo.htmlacademy.ru" method="post">
      <p class="appointment__item">
        <label>
          Дата
          <input class="appointment__field" type="date" name="date" value="2017-10-08">
        </label>
      </p>
      <p class="appointment__item">
        <label>
          Время
          <input class="appointment__field" type="time" name="time" value="10:00">
        </label>
      </p>
      <p class="appointment__item">
        <label>
          Ваше имя
          <input class="appointment__field" type="text" name="name" value="" placeholder="Борода">
        </label>
      </p>
      <p class="appointment__item">
        <label>
          Телефон
          <input class="appointment__field" type="tel" name="phone" value="" placeholder="+7 123 456-78-90">
        </label>
      </p>
      <button class="button button-appointment" type="submit">Отправить</button>
    </form>
  </section>`
);

export default appointment;
