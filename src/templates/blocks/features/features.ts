import Block from "../../../core/block";

import features from "./features.tml";
import "./features.scss";

interface IFeatures {
}

class Features extends Block {
  constructor(props?: IFeatures) {
    super("div", props);
  }

  render() {
    return this.setTemplate(features, this.props);
  }
}

export default Features;
