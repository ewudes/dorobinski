import Block from "./block";

function render(query: string, block: Block) {
  const root = document.querySelector(query) as HTMLElement;
  const wrapper = root.querySelector(".wrapper") as HTMLElement;
  if(!!wrapper) {
    root.firstChild?.remove();
  }
  root.appendChild(block.getElement());

    block.dispatchMountComponent();
}

export default render;
