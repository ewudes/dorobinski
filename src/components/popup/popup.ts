import Block from "../../utils/block";
import Button from "../button/button";

import popup from "./popup.tml";
import './popup.scss'

interface IPopup {
}

class Popup extends Block {
  constructor(props?: IPopup) {
    setTimeout(() => {
      const wrapperForm = document.querySelector(".popup__wrap");
      const popupForm = document.querySelector(".popup__form") as HTMLDivElement;

      popupForm?.addEventListener('mousedown', function(e) {
        var coords = getCoords(popupForm);

        var shiftX = e.pageX - coords.left;
        var shiftY = e.pageY - coords.top;

        moveAt(e)

        function moveAt(e : any) {
          if (popupForm !== null) {
            popupForm.style.left = e.pageX - shiftX + 'px';
            popupForm.style.top = e.pageY - shiftY + 'px';
            popupForm.style.transform = "translate(0, 0)"
          }
        }

        document.onmousemove = function(e) {
          moveAt(e);
        }

        popupForm.onmouseup = function() {
          document.onmousemove = null;
          popupForm.onmouseup = null;
        }

        popupForm.ondragstart = function() {
          return false;
        };

        function getCoords(elem : any) {
          var box = elem.getBoundingClientRect();
          return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
          };
        }
      });

      wrapperForm?.addEventListener('click', function() {
        closeForm()
      });
    });

    const closeForm = () => {
      const wrapper = document.querySelector(".wrapper") as HTMLDivElement;
      const popup = document.querySelector(".popup") as HTMLDivElement;
      wrapper.removeChild(popup);
    }

    const close = new Button({
      className: "popup__close",
      text: "Закрыть",
      events: {
        click: () => closeForm()
      }
    });

    super("div", {close, ...props});
  }

  render() {
    return this.setTemplate(popup, this.props);
  }
}

export default Popup;
