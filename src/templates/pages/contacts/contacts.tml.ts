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
        <div class="contacts__map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6036253003183!2d30.320858716204274!3d59.938719169054046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2sBolshaya%20Konyushennaya%20St%2C%2019%2F8%2C%20Sankt-Peterburg%2C%20191186!5e0!3m2!1sen!2sru!4v1676292954408!5m2!1sen!2sru" width="100%" height="450"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </main>
    {{{footer}}}
  </div>`
);

export default contacts;
