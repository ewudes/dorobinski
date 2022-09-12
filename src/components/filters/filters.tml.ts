import Handlebars from "handlebars";

const breadcrumbs = Handlebars.compile(
  `<section class="filters">
    <h2 class="visually-hidden">Фильтр товаров</h2>
    <form class="filter" method="get" action="https://echo.htmlacademy.ru">
      <fieldset>
        <legend>Производители:</legend>
        <ul>
          <li class="filter-option">
            <input class="visually-hidden filter-input filter-input-checkbox" type="checkbox" name="baxter-of-california" id="filter-baxter-of-california" checked>
            <label for="filter-baxter-of-california">Baxter of California</label>
          </li>
          <li class="filter-option">
            <input class="visually-hidden filter-input filter-input-checkbox" type="checkbox" name="mr-natty" id="filter-mr-natty">
            <label for="filter-mr-natty">Mr Natty</label>
          </li>
          <li class="filter-option">
            <input class="visually-hidden filter-input filter-input-checkbox" type="checkbox" name="suavecito" id="filter-suavecito" checked>
            <label for="filter-suavecito">Suavecito</label>
          </li>
          <li class="filter-option">
            <input class="visually-hidden filter-input filter-input-checkbox" type="checkbox" name="malin-goetz" id="filter-malin-goetz">
            <label for="filter-malin-goetz">Malin+Goetz</label>
          </li>
          <li class="filter-option">
            <input class="visually-hidden filter-input filter-input-checkbox" type="checkbox" name="murrays" id="filter-murrays">
            <label for="filter-murrays">Murray’s</label>
          </li>
          <li class="filter-option">
            <input class="visually-hidden filter-input filter-input-checkbox" type="checkbox" name="american-crew" id="filter-american-crew" checked>
            <label for="filter-american-crew">American Crew</label>
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Группы товаров:</legend>
        <ul>
          <li class="filter-option">
            <input class="visually-hidden filter-input filter-input-radio" type="radio" name="product-group" value="shaving" id="filter-shave">
            <label for="filter-shave">Бритвенные принадлежности</label>
          </li>
          <li class="filter-option">
            <input class="visually-hidden filter-input filter-input-radio" type="radio" name="product-group" value="hair-care" id="filter-care" checked>
            <label for="filter-care">Средства для ухода</label>
          </li>
          <li class="filter-option">
            <input class="visually-hidden filter-input filter-input-radio" type="radio" name="product-group" value="accessories" id="filter-accessories">
            <label for="filter-accessories">Аксессуары</label>
          </li>
        </ul>
      </fieldset>
      <button type="submit" class="filter-button button">Показать</button>
    </form>
  </section>`
);

export default breadcrumbs;
