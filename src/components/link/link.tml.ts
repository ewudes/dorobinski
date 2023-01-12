import Handlebars from "handlebars";

const link = Handlebars.compile(
  `<a data-value="{{dataset}}" class="{{className}}">{{{name}}}</a>`
);

export default link
