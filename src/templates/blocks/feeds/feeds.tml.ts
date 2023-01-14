import Handlebars from "handlebars";

const feeds = Handlebars.compile(
  `<section class="feeds">
    <h2 class="visually-hidden">Список средств для ухода</h2>
    <ul class="feeds__list">
      {{#each feeds}}
        {{{item}}}
      {{/each}}
    </ul>
    {{{pagination}}}
  </section>`
);

export default feeds;
