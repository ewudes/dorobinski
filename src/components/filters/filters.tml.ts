import Handlebars from "handlebars";

Handlebars.registerHelper('contains', function(needle, haystack, options) {
  needle = Handlebars.escapeExpression(needle);
  haystack = Handlebars.escapeExpression(haystack);
  // @ts-ignore
  return (haystack.indexOf(needle) > -1) ? options.fn(this) : options.inverse(this);
});

const breadcrumbs = Handlebars.compile(
  `<section class="filters">
    <h2 class="visually-hidden">Фильтр товаров</h2>
    <form class="filter" method="get" action="https://echo.htmlacademy.ru">
      {{#each this}}
        {{#contains type "checkbox"}}
          <fieldset class="filters__group">
            <legend>{{legend}}</legend>
            <ul class="filters__option-list">
              {{#each this.items}}
                <li class="filters__option">
                  <input
                    class="visually-hidden filters__input filters__input-checkbox"
                    type="checkbox"
                    name="{{name}}"
                    id="{{id}}"
                    checked>
                  <label
                    class="filters__input-label"
                    for="{{id}}"
                  >
                    {{label}}
                  </label>
                </li>
              {{/each}}
            </ul>
          </fieldset>
        {{/contains}}
        {{#contains type "radio"}}
          <fieldset class="filters__group">
            <legend>{{legend}}</legend>
            <ul class="filters__option-list">
              {{#each this.items}}
                <li class="filters__option">
                  <input
                    class="visually-hidden filters__input filters__input-radio"
                    type="radio"
                    name="{{name}}"
                    value="{{value}}"
                    id="{{id}}"
                    {{checked}}>
                  <label
                    class="filters__input-label"
                    for="{{id}}"
                  >
                    {{label}}
                  </label>
                </li>
              {{/each}}
            </ul>
          </fieldset>
        {{/contains}}
      {{/each}}

      <button type="submit" class="filter-button button">Показать</button>
    </form>
  </section>`
);

export default breadcrumbs;
