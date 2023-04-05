import Handlebars from "handlebars";

const news = Handlebars.compile(
  `<section class="news">
    <h2 class="news__title">Новости</h2>
    <ul class="news__list">
      <li class="news__item">
        <p class="news__description">Нам наконец завезли Ягермайстер! Теперь вы можете пропустить стаканчик во время стрижки</p>
        <time datetime="2016-01-11" class="news__time">11 января</time>
      </li>
      <li class="news__item">
        <p class="news__description">В нашей команде пополнение, Борис «Бритва» Стригунец, обладатель множества титулов и наград пополнил наши стройные ряды</p>
        <time datetime="2016-01-18" class="news__time">18 января</time>
      </li>
    </ul>
    <a class="button news__button" href="news.html">Все новости</a>
  </section>`
);

export default news;
