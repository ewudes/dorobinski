import Handlebars from "handlebars";

const button = Handlebars.compile(
  `<button class="{{className}}">{{text}}</button>`
);

export default button;
