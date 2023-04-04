import Handlebars from "handlebars";

const link = Handlebars.compile(
  `<div class="hamburger not-active">
    <span></span>
    <span></span>
    <span></span>
  </div>`
);

export default link
