import Handlebars from "handlebars";

const news = Handlebars.compile(
  `<div class="wrapper">
    {{{header}}}
      <main class="container">
        <span class="news">Новости</span>
      </main>
    {{{footer}}}
  </div>`
);

export default news;
