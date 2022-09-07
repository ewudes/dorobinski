import Handlebars from "handlebars";

const home = Handlebars.compile(
  `<div class="wrapper">
    {{{header}}}
    <main class="container">
      <h1 class="visually-hidden">Барбершоп «Бородинский»</h1>
      {{{features}}}
      <div class="index-columns">
        {{{news}}}
        {{{gallery}}}
      </div>
      <div class="index-columns">
        {{{contacts}}}
        {{{appointment}}}
      </div>
    </main>
    {{{footer}}}
  <div>`
);

export default home;
