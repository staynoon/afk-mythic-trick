import * as React from "react"

import "../main.css"
import "./Stage.css"

import arrowUp from "../assets/arrowUp.svg"
import arrowDown from "../assets/arrowDown.svg"

function Stage() {
  const [chapter,setChapter] = React.useState<number>(34);
  const [stage,setStage] = React.useState<number>(7);

  let incrementChapter = ():void => {
    if (chapter == 40) {
      setChapter(1);
      setStage(12);
    } else {
    setChapter(chapter + 1);
    }
  }

  let decrementChapter = ():void => {
    if (chapter === 20 && stage > 40) {
      setStage(40);
    } else if (chapter === 5 && stage > 36) {
      setStage(36);
    } else if (chapter === 3 && stage > 28) {
      setStage(28);
    } else if (chapter === 2 && stage > 12) {
      setStage(12);
    }
    if (chapter === 1) {
      setChapter(40);
    } else {
    setChapter(chapter - 1);
    }
  }

  let incrementStage = ():void => {
    if (chapter === 1 && stage === 12) {
      setStage(1);
    } else if (chapter === 2 && stage === 28) {
      setStage(1);
    } else if (chapter >= 3 && chapter <= 4 && stage === 36){
      setStage(1);
    } else if (chapter >= 5 && chapter <= 19 && stage === 40) {
      setStage(1);
    } else if (chapter >= 20 && stage === 60) {
      setStage(1);
    } else {
      setStage(stage + 1);
    }
  };

  let decrementStage = ():void => {
    if (stage === 1){
      if (chapter === 1) {
        setStage(12);
      } else if (chapter === 2) {
        setStage(28);
      } else if (chapter >= 3 && chapter <=4) {
        setStage(36)
      } else if (chapter >= 5 && chapter <= 19) {
        setStage(40);
      } else {
        setStage(60);
      }
    } else {
      setStage(stage - 1);
    }
  };

  return(
    <div>
      <h2>Stage</h2>
      <div className="stage-box">
        <div>
          <img src={arrowUp} className="arrow" alt="up arrow" onClick={incrementChapter}></img>
          <h3>{chapter}</h3>
          <img src={arrowDown} className="arrow" alt="down arrow" onClick={decrementChapter}></img>
        </div>
        <h3 className="hyphen">-</h3>
        <div>
          <img src={arrowUp} className="arrow" alt="up arrow" onClick={incrementStage}></img>
          <h3>{stage}</h3>
          <img src={arrowDown} className="arrow" alt="down arrow" onClick={decrementStage}></img>
        </div>
      </div>
    </div>
  )
}

export default Stage;