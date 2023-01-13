import Block from "../../../core/block";

import gallery from "./gallery.tml";
import './gallery.scss'

interface IGallery {
}

class Gallery extends Block {
  constructor(props?: IGallery) {
    super("div", props);
  }

  render() {
    return this.setTemplate(gallery, this.props);
  }
}

export default Gallery;
