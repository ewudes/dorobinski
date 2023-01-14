import Handlebars from "handlebars";

const item = Handlebars.compile(
  `<li class="feeds-item">
    <div class="feeds-item__wrapper">
      <img src="{{img}}" width="188" height="160" alt="{{description}}">
      <div class="feeds-item__description">
        <h3 class="feeds-item__category">{{description}}</h3>
        <p>Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад.<p>
      </div>
    </div>
    <p class="feeds-item__price">
      <a class="feeds-item__buy" href="#">Подробнее</a>
    </p>
  </li>`
);

export default item;
