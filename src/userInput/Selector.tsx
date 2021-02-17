import * as React from "react"

import "../main.css"
import "./Selector.css"

import arrowUp from "../assets/arrowUp.svg"
import arrowDown from "../assets/arrowDown.svg"

interface Props {
  state: number,
  setState: React.Dispatch<React.SetStateAction<number>>
}

function Selector(props: Props) {
  let increment = ():void => {
    props.setState(props.state + 1)
  };

  let decrement = ():void => {
    props.setState(props.state - 1)
  };

  return(
    <div>
      <img src={arrowUp} className="arrow" alt="up arrow" onClick={increment}></img>
      <h3>{props.state}</h3>
      <img src={arrowDown} className="arrow" alt="down arrow" onClick={decrement}></img>
    </div>
  );
};

export default Selector;