import Handlebars from "handlebars";

const pagination = Handlebars.compile(
  `<ul class="pagination">
    <li class="pagination-prev"><a href="#">&laquo;</a></li>

    {{#each pages}}
    <li class="pagination-page" data-page="{{this}}"><a href="#">{{this}}</a></li>
    {{/each}}

    <li class="pagination-next"><a href="#">&raquo;</a></li>
  </ul>`
);

export default pagination;
