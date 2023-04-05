import Handlebars from "handlebars";

const gallery = Handlebars.compile(
  `<section class="gallery">
    <h2 class="gallery__title">Фотогалерея</h2>
    <figure class="gallery__content"></figure>
    <div class="gallery__buttons">
      <button class="button gallery-button gallery-button-back" type="button">Назад</button>
      <button class="button gallery-button gallery-button-next" type="button">Вперед</button>
    </div>
  </section>`
);

export default gallery;
