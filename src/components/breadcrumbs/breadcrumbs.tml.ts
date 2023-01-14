import Handlebars from "handlebars";

const breadcrumbs = Handlebars.compile(
  `<ul class="breadcrumbs">
    <li class="breadcrumbs__item">
      <a href="#">Главная</a>
    </li>
    {{#each routes}}
      <li class="breadcrumbs__item">
        <a href="#">{{this}}</a>
      </li>
    {{/each}}
    </ul>`
);

export default breadcrumbs;
