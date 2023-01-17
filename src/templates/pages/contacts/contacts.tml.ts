import Handlebars from "handlebars";

const contacts = Handlebars.compile(
  `<div class="wrapper">
    {{{header}}}
      <main class="container">
        <h1 class="page-title">Контакты</h1>
        {{{breadcrumbs}}}
        <h2 class="contacts__title">Наши мастера</h2>
        {{{staff}}}
        <h2 class="contacts__title">Как нас найти</h2>
        <div class="contacts__map">Карта</div>
      </main>
    {{{footer}}}
  </div>`
);

export default contacts;
