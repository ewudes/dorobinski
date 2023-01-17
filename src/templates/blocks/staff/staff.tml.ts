import Handlebars from "handlebars";

const staff = Handlebars.compile(
  `<section class="staff">
    <h2 class="visually-hidden">Список средств для ухода</h2>
    <ul class="staff__list">
      {{#each staff}}
        {{{item}}}
      {{/each}}
    </ul>
  </section>`
);

export default staff;
