import Handlebars from "handlebars";

const catalog = Handlebars.compile(
  `<section class="catalog">
    <h2 class="visually-hidden">Список средств для ухода</h2>
    <ul class="catalog__list">
      {{#each catalog}}
        {{{item}}}
      {{/each}}
    </ul>
    {{{pagination}}}
  </section>`
);

export default catalog;
