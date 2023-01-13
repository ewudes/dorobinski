import Handlebars from "handlebars";

const breadcrumbs = Handlebars.compile(
  `<section class="filters">
    <h2 class="visually-hidden">Фильтр товаров</h2>
    <form class="filter" method="get" action="https://echo.htmlacademy.ru">
      <fieldset class="filters__group">
        <legend>Производители:</legend>
        <ul class="filters__option-list">
          <li class="filters__option">
            <input class="visually-hidden filters__input filters__input-checkbox" type="checkbox" name="baxter-of-california" id="filter-baxter-of-california" checked>
            <label class="filters__input-label" for="filter-baxter-of-california">Baxter of California</label>
          </li>
          <li class="filters__option">
            <input class="visually-hidden filters__input filters__input-checkbox" type="checkbox" name="mr-natty" id="filter-mr-natty">
            <label class="filters__input-label" for="filter-mr-natty">Mr Natty</label>
          </li>
          <li class="filters__option">
            <input class="visually-hidden filters__input filters__input-checkbox" type="checkbox" name="suavecito" id="filter-suavecito" checked>
            <label class="filters__input-label" for="filter-suavecito">Suavecito</label>
          </li>
          <li class="filters__option">
            <input class="visually-hidden filters__input filters__input-checkbox" type="checkbox" name="malin-goetz" id="filter-malin-goetz">
            <label class="filters__input-label" for="filter-malin-goetz">Malin+Goetz</label>
          </li>
          <li class="filters__option">
            <input class="visually-hidden filters__input filters__input-checkbox" type="checkbox" name="murrays" id="filter-murrays">
            <label class="filters__input-label" for="filter-murrays">Murray’s</label>
          </li>
          <li class="filters__option">
            <input class="visually-hidden filters__input filters__input-checkbox" type="checkbox" name="american-crew" id="filter-american-crew" checked>
            <label class="filters__input-label" for="filter-american-crew">American Crew</label>
          </li>
        </ul>
      </fieldset>
      <fieldset class="filters__group">
        <legend>Группы товаров:</legend>
        <ul class="filters__option-list">
        <li class="filters__option">
          <input class="visually-hidden filters__input filters__input-radio" type="radio" name="product-group" value="all" id="filter-all" checked>
          <label class="filters__input-label" for="filter-all">Все</label>
        </li>
          <li class="filters__option">
            <input class="visually-hidden filters__input filters__input-radio" type="radio" name="product-group" value="shaving" id="filter-shave">
            <label class="filters__input-label" for="filter-shave">Бритвенные принадлежности</label>
          </li>
          <li class="filters__option">
            <input class="visually-hidden filters__input filters__input-radio" type="radio" name="product-group" value="hair-care" id="filter-care">
            <label class="filters__input-label" for="filter-care">Средства для ухода</label>
          </li>
          <li class="filters__option">
            <input class="visually-hidden filters__input filters__input-radio" type="radio" name="product-group" value="accessories" id="filter-accessories">
            <label class="filters__input-label" for="filter-accessories">Аксессуары</label>
          </li>
        </ul>
      </fieldset>
      <button type="submit" class="filter-button button">Показать</button>
    </form>
  </section>`
);

export default breadcrumbs;
