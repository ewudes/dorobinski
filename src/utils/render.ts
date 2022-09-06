import Block from "./block";

function render(query: string, block: Block) {
  const root = document.querySelector(query) as HTMLElement;
  root.appendChild(block.getElement());

    block.dispatchMountComponent();
}

export default render;
