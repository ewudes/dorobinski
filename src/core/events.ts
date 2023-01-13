import Validation from "../utils/validation";

const focus = (event: Event): void => {
  const input = event.target as HTMLInputElement;
  input.classList.remove("input--error");
};

const blur = (event: Event): void => {
  const input = event.target as HTMLInputElement;
  const result = Validation.verification(input.name, input.value);

  toggleError(input, result);
};

const submit = (event: Event): void => {
  event.preventDefault();

  const data: Record<string, string> = {};
  const fields = document.querySelectorAll(".input");
  let validationError: number = 0;

  fields.forEach((input: any) => {
    const { verify } = Validation.verification(input.name, input.value);
    if (!verify) {
      validationError++
    };

    data[input.name] = input.value;
  });

  if (validationError === 0) {
    console.log("Данные формы", data);
  } else {
    console.log("Некорректные данные");
  }
};

const createError = (message: string): HTMLElement => {
  const div = document.createElement("div");
  div.setAttribute("class", "input__error--label");
  div.textContent = message;

  return div;
};

const toggleError = (
  target: HTMLInputElement,
  result: {
    verify: boolean;
    message: string;
  }
): void => {
  if (!result.verify) {
    target.classList.add("input--error");

    if (
      target.nextElementSibling === null ||
      (target.nextElementSibling !== null &&
        target.nextElementSibling.tagName !== "DIV")
    ) {
      const element = createError(result.message);
      target.after(element);
    }
  }

  if (
    target.nextElementSibling !== null &&
    target.nextElementSibling.tagName === "DIV" &&
    result.verify
  ) {
    target.nextElementSibling.remove();
  }
};

export { focus, blur, submit };
