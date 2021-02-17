import * as React from "react"

import "../main.css"
import "./Stage.css"

import "./Selector"
import Selector from "./Selector"

function Stage() {
  const [chapter,setChapter] = React.useState<number>(34);
  const [stage,setStage] = React.useState<number>(7);

  return(
    <div>
      <h2>Stage</h2>
      <div className="stage-box">
        <Selector state={chapter} setState={setChapter} />
        <h3 className="hyphen">-</h3>
        <Selector state={stage} setState={setStage} />
      </div>
    </div>
  )
}

export default Stage;