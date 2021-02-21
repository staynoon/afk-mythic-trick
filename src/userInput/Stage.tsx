import * as React from "react"

import "../main.css"
import "./Stage.css"

import arrowUp from "../assets/arrowUp.svg"
import arrowDown from "../assets/arrowDown.svg"

interface Props {
  state: {
    chapter: number,
    stage: number
  }
  setState : {
    setChapter: React.Dispatch<React.SetStateAction<number>>,
    setStage: React.Dispatch<React.SetStateAction<number>>
  }
}

function Stage(props: Props) {
  let incrementChapter = ():void => {
    if (props.state.chapter == 40) {
      props.setState.setChapter(16);
      if (props.state.stage > 40) {
        props.setState.setStage(40);
      } else if (props.state.stage < 11) {
        props.setState.setStage(11);
      }
    } else {
      props.setState.setChapter(props.state.chapter + 1);
    }
  }

  let decrementChapter = ():void => {
    if (props.state.chapter === 20 && props.state.stage > 40) {
      props.setState.setStage(40);
    }

    if (props.state.chapter === 16) {
      props.setState.setChapter(40);
    } else {
      if (props.state.chapter === 17 && props.state.stage < 11) {
        props.setState.setStage(11);
      }
      props.setState.setChapter(props.state.chapter - 1);
    }
  }

  let incrementStage = ():void => {
    if (props.state.chapter >= 17 && props.state.chapter <= 19 && props.state.stage === 40) {
      props.setState.setStage(1);
    } else if (props.state.chapter >= 20 && props.state.stage === 60) {
      props.setState.setStage(1);
    } else if (props.state.chapter === 16 && props.state.stage === 40) {
      props.setState.setStage(11);

    } else {
      props.setState.setStage(props.state.stage + 1);
    }
  };

  let decrementStage = ():void => {
    if (props.state.stage === 1){
      if (props.state.chapter >= 17 && props.state.chapter <= 19) {
        props.setState.setStage(40);
      } else {
        props.setState.setStage(60);
      }
    } else if (props.state.chapter === 16 && props.state.stage === 11){
      props.setState.setStage(40);
    } else {
      props.setState.setStage(props.state.stage - 1);
    }
  };

  return(
    <div>
      <h2>Stage</h2>
      <div className="stage-box">
        <div>
          <img src={arrowUp} className="arrow" alt="up arrow" onClick={incrementChapter}></img>
          <h3 className="value-container">{props.state.chapter}</h3>
          <img src={arrowDown} className="arrow" alt="down arrow" onClick={decrementChapter}></img>
        </div>
        <h3 className="hyphen">-</h3>
        <div>
          <img src={arrowUp} className="arrow" alt="up arrow" onClick={incrementStage}></img>
          <h3 className="value-container">{props.state.stage}</h3>
          <img src={arrowDown} className="arrow" alt="down arrow" onClick={decrementStage}></img>
        </div>
      </div>
    </div>
  )
}

export default Stage;