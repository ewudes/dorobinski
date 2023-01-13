import Handlebars from "handlebars";

const contacts = Handlebars.compile(
  `<div class="wrapper">
    {{{header}}}
      <main class="container">
        <span class="contacts">Контакты</span>
      </main>
    {{{footer}}}
  </div>`
);

export default contacts;
