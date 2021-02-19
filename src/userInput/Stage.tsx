import * as React from "react"

import "../main.css"
import "./Stage.css"

import arrowUp from "../assets/arrowUp.svg"
import arrowDown from "../assets/arrowDown.svg"

interface Props {
  chapter: number,
  setChapter: React.Dispatch<React.SetStateAction<number>>
  stage: number,
  setStage: React.Dispatch<React.SetStateAction<number>>
}

function Stage(props: Props) {
  let incrementChapter = ():void => {
    if (props.chapter == 40) {
      props.setChapter(1);
      props.setStage(12);
    } else {
      props.setChapter(props.chapter + 1);
    }
  }

  let decrementChapter = ():void => {
    if (props.chapter === 20 && props.stage > 40) {
      props.setStage(40);
    } else if (props.chapter === 5 && props.stage > 36) {
      props.setStage(36);
    } else if (props.chapter === 3 && props.stage > 28) {
      props.setStage(28);
    } else if (props.chapter === 2 && props.stage > 12) {
      props.setStage(12);
    }
    if (props.chapter === 1) {
      props.setChapter(40);
    } else {
      props.setChapter(props.chapter - 1);
    }
  }

  let incrementStage = ():void => {
    if (props.chapter === 1 && props.stage === 12) {
      props.setStage(1);
    } else if (props.chapter === 2 && props.stage === 28) {
      props.setStage(1);
    } else if (props.chapter >= 3 && props.chapter <= 4 && props.stage === 36){
      props.setStage(1);
    } else if (props.chapter >= 5 && props.chapter <= 19 && props.stage === 40) {
      props.setStage(1);
    } else if (props.chapter >= 20 && props.stage === 60) {
      props.setStage(1);
    } else {
      props.setStage(props.stage + 1);
    }
  };

  let decrementStage = ():void => {
    if (props.stage === 1){
      if (props.chapter === 1) {
        props.setStage(12);
      } else if (props.chapter === 2) {
        props.setStage(28);
      } else if (props.chapter >= 3 && props.chapter <=4) {
        props.setStage(36)
      } else if (props.chapter >= 5 && props.chapter <= 19) {
        props.setStage(40);
      } else {
        props.setStage(60);
      }
    } else {
      props.setStage(props.stage - 1);
    }
  };

  return(
    <div>
      <h2>Stage</h2>
      <div className="stage-box">
        <div>
          <img src={arrowUp} className="arrow" alt="up arrow" onClick={incrementChapter}></img>
          <h3 className="value-container">{props.chapter}</h3>
          <img src={arrowDown} className="arrow" alt="down arrow" onClick={decrementChapter}></img>
        </div>
        <h3 className="hyphen">-</h3>
        <div>
          <img src={arrowUp} className="arrow" alt="up arrow" onClick={incrementStage}></img>
          <h3 className="value-container">{props.stage}</h3>
          <img src={arrowDown} className="arrow" alt="down arrow" onClick={decrementStage}></img>
        </div>
      </div>
    </div>
  )
}

export default Stage;