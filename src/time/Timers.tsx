import * as React from "react"

import Claimprompt from "./Claimprompt"
import Countdown from "./Countdown"

import "./Timers.css"

interface Props {
  progression: {
    chapter: number,
    stage: number
  }
  timeLeft: {
    stone: number,
    gear: number,
    emblem: number
  }
}

function Timers (props: Props) {
  if (props.progression.chapter <= 20) {
    return(
      <div>
        <Claimprompt remainingTime={props.timeLeft.gear} claimType="mythic gear"/>
        <div className="row-container">
          <Countdown name="Mythic Gear Timer" remainingSeconds={props.timeLeft.gear} />
        </div>
      </div>
    )
  } else if (props.progression.chapter === 21) {
    return(
      <div>
        <Claimprompt remainingTime={props.timeLeft.gear} claimType="mythic gear"/>
        <div className="row-container">
          <Countdown name="Emblems Timer" remainingSeconds={props.timeLeft.emblem} />
          <Countdown name="Mythic Gear Timer" remainingSeconds={props.timeLeft.gear} />
        </div>
      </div>
    )
  } else {
    return(
      <div>
        <Claimprompt remainingTime={props.timeLeft.stone} claimType="stone"/>
        <div className="row-container">
          <Countdown name="Emblems Timer" remainingSeconds={props.timeLeft.emblem} />
          <Countdown name="Mythic Gear Timer" remainingSeconds={props.timeLeft.gear} />
          <Countdown name="Stone Timer" remainingSeconds={props.timeLeft.stone} />
        </div>
      </div>
    )
  }
}

export default Timers;