import Handlebars from "handlebars";

const features = Handlebars.compile(
  `<section class="features">
    <h2 class="visually-hidden">Преимущества</h2>
    <ul class="features__list">
      <li class="features__item">
        <h3 class="features__title">Быстро</h3>
        <p class="features__description">Мы делаем свою работу быстро! Два часа пролетят незаметно и вы — счастливый обладатель стильной стрижки-минутки!</p>
      </li>
      <li class="features__item">
        <h3 class="features__title">Круто</h3>
        <p class="features__description">Забудьте, как вы стриглись раньше. Мы сделаем из вас звезду футбола или кино! Во всяком случае внешне.</p>
      </li>
      <li class="features__item">
        <h3 class="features__title">Дорого</h3>
        <p class="features__description">Наши мастера — профессионалы своего дела и не могут стоить дешево. К тому же, разве цена не дает определенный статус?</p>
      </li>
    </ul>
  </section>`
);

export default features;
