import Handlebars from "handlebars";

const double = Handlebars.compile(
  `<div class="double">
    {{{aside}}}
    {{{main}}}
  </div>`
);

export default double;
