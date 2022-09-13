import Handlebars from "handlebars";

const error = Handlebars.compile(
  `<div class="wrapper wrapper--error">
    {{{header}}}
      <main class="container container--error">
        <span lass="error">
          <div class="error__title">404</div>
          <span class="error__description">Здесь ничего нет</span>
        </span>
      </main>
    {{{footer}}}
  </div>`
);

export default error;
