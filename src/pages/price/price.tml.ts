import Handlebars from "handlebars";

const price = Handlebars.compile(
  `<div class="wrapper">
    {{{header}}}
      <main class="container">
        <span class="price">Прайс-лист</span>
      </main>
    {{{footer}}}
  </div>`
);

export default price;
