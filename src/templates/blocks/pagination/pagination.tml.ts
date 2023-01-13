import Handlebars from "handlebars";

const pagination = Handlebars.compile(
  `<ul class="pagination">
      <li class="pagination__item"><a href="#">1</a></li>
      <li class="pagination__item pagination__item--current"><a>2</a></li>
      <li class="pagination__item"><a href="#">3</a></li>
      <li class="pagination__item"><a href="#">4</a></li>
    </ul>`
);

export default pagination;
