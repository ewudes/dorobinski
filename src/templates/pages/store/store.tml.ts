import Handlebars from "handlebars";

const store = Handlebars.compile(
  `<div class="wrapper">
    {{{header}}}
    <main class="container">
      <h1 class="page-title">Cредства для ухода</h1>
      {{{breadcrumbs}}}
      {{{double}}}
    </main>
    {{{footer}}}
  </div>`
);

export default store;
