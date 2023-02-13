import Handlebars from "handlebars";

const item = Handlebars.compile(
  `<li class="staff-item">
    <a href="staff-item.html">
      <p class="staff-item__image">
        <img src="{{img}}" width="100" height="160" alt="{{description}}">
      </p>
      <h3 class="staff-item__name">{{name}}</h3>
      <span class="staff-item__description">{{description}}</span>
    </a>
  </li>`
);

export default item;
