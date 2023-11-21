import Handlebars from "handlebars";
import Block from "../../../core/block";

import pagination from "./pagination.tml";
import "./pagination.scss";

interface IPagination {
  length: number;
  map: any,
  filter: any,
}

class Pagination extends Block {
  constructor(props: IPagination) {

    const getLastDigit = (t: any) => {
      return parseInt(t.toString().slice(-1))
    }

    const getFirstDigits = (t: any) => {
      return parseInt(t.toString().slice(0,-1))
    }

    const isMultipleOf5 = (t: any) => {
      return [0,5].reduce((res,curr)=>{
        return res = res || curr === getLastDigit(t);
      },false);
    }

    const isBetween0and5 = (t: any) => {
      const _t = getLastDigit(t);
      return  _t < 5;
    }

    const isBetween5and9 = (t: any) => {
      const _t = getLastDigit(t);
      return  _t => 5 && _t <= 9;
    }

    const appendDigit = (t: any, d: any) => {
       return parseInt(getFirstDigits(t).toString() + d.toString())
     }

    const getLeft = (t: any) => {
      if(t>=10){
        if(isBetween0and5(t)) return appendDigit(t,0);
        else return appendDigit(t,5);
      } else {
        if (t<5) return 0;
        else return 5;
      }
    }

    const getSecondRightMostDigit = (t: any) => {
      return parseInt(t.toString().slice(-2,-1))
    }

    const incrementSecondDigit = (t: any) => {
      return t+10;
    }

    const getRight = (t: any) => {
      if(t<5) return 5;
      else if (t<10) return 10;
      else if(isBetween0and5(t)) return appendDigit(t,5)
      else return appendDigit(incrementSecondDigit(t),0);
    }

    function range(c: any, m: any) {
      const current = c || 1,
            last = m,
            delta = 2,
            left = getLeft(c),
            right = getRight(c),
            range = [],
            rangeWithEllipsis = [];
      let l,
          t;

      const rightBoundary = right < 5 ? 5 : right;
      for (var i = left ; i < rightBoundary ; ++i) {
        if( i < m && i > 0) range.push(i);
      }
      range.push(m);

      for (let i of range) {
        if (l) {
          if (i - l === 2) {
            t = l+1;
            rangeWithEllipsis.push(t);
          } else if (i - l !== 1){
            rangeWithEllipsis.push("...");
          }
        }
        rangeWithEllipsis.push(i);
        l = i;
      }
    return rangeWithEllipsis;
  }


    super("div", {
      ...props
    });
  }

  render() {
    return this.setTemplate(pagination, this.props);
  }
}

export default Pagination;
