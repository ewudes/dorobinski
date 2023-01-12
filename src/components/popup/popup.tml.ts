import Handlebars from "handlebars";

const popup = Handlebars.compile(
  `<div class="popup">
    <div class="popup__wrap"></div>
    <form class="popup__form">
      <h4 class="popup__title">Вход в личный кабинет</h4>
      <p class="popup__text">Введите логин и пароль для входа в ваш кабинет пользователя:</p>
      <input class="popup__field popup__field--login" placeholder="Введите логин" required/>
      <input class="popup__field popup__field--pass" placeholder="Введите пароль" required/>
      <label class="popup__remember">
        <input type="checkbox" />
        Запомнить меня
      </label>
      <a class="popup__forgot" href="#">Я забыл пароль</a>
      <button class="popup__submit" type="submit">Войти</button>
      <button class="popup__signup" type="button">Зарегистрироваться</button>
      {{{close}}}
    </form>
  </div>`
);

export default popup;
