import Block from "../../../core/block";
import Button from "../../../components/button/button";

import popup from "./popup.tml";
import './popup.scss'

interface IPopup {
}

class Popup extends Block {
  constructor(props?: IPopup) {
    setTimeout(() => {
      const popupBack = document.querySelector(".popup__back");
      const popupWrap = document.querySelector(".popup__wrap") as HTMLDivElement;

      const popupMove = (e: any) => {
        var coords = getCoords(popupWrap);

        var shiftX = e.pageX - coords.left;
        var shiftY = e.pageY - coords.top;

        moveAt(e)

        function moveAt(e : any) {
          if (popupWrap !== null) {
            popupWrap.style.left = e.pageX - shiftX + 'px';
            popupWrap.style.top = e.pageY - shiftY + 'px';
            popupWrap.style.transform = "translate(0, 0)"
          }
        }

        document.onmousemove = function(e) {
          moveAt(e);
        }

        popupWrap.onmouseup = function() {
          document.onmousemove = null;
          popupWrap.onmouseup = null;
        }

        popupWrap.ondragstart = function() {
          return false;
        };

        function getCoords(elem : any) {
          var box = elem.getBoundingClientRect();
          return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
          };
        }
      }

      document.onmouseover = function(e : any) {
        if (e.target.className === "popup__wrap") {
          popupWrap.style.cursor = "move";
          popupWrap.addEventListener('mousedown', popupMove);
        } else {
          popupWrap.removeEventListener('mousedown', popupMove)
        }
      }

      popupBack?.addEventListener('click', function() {
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
