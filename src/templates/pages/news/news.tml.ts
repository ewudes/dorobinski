import Handlebars from "handlebars";

const news = Handlebars.compile(
  `<div class="wrapper">
    {{{header}}}
    <main class="container">
      <h1 class="page-title">Новости</h1>
      {{{breadcrumbs}}}
      {{{double}}}
    </main>
    {{{footer}}}
  </div>`
);

export default news;
