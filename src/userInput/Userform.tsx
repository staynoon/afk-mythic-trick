import * as React from "react"

import Dateselector from "./Dateselector"
import Stage from "./Stage"
import Trickbutton from "./Trickbutton"

interface Props {
  progression: {
    chapter: number,
    stage: number
  },
  setProgression: {
    setChapter: React.Dispatch<React.SetStateAction<number>>,
    setStage: React.Dispatch<React.SetStateAction<number>>
  },
  chosenTime: {
    month: number,
    day: number,
    year: number,
    hour: number,
    minute: number
  },
  setTime: {
    setMonth: React.Dispatch<React.SetStateAction<number>>,
    setDay: React.Dispatch<React.SetStateAction<number>>,
    setYear: React.Dispatch<React.SetStateAction<number>>,
    setHour: React.Dispatch<React.SetStateAction<number>>,
    setMinute: React.Dispatch<React.SetStateAction<number>>
  },
  timeLeft:{
    stone: number,
    gear: number,
    emblem: number
  },
  setTimer: {
    setStone: React.Dispatch<React.SetStateAction<number>>,
    setGear: React.Dispatch<React.SetStateAction<number>>,
    setEmblem: React.Dispatch<React.SetStateAction<number>>
  }
  slide: string,
  setSlide: React.Dispatch<React.SetStateAction<string>>
}

function Userform(props: Props) {
  return(
    <div>
      <Stage state={props.progression} setState={props.setProgression} />
      <Dateselector time={props.chosenTime} setTime={props.setTime} />
      <Trickbutton time={props.chosenTime} timeLeft={props.timeLeft} setTimer={props.setTimer} progression={props.progression} rate={props.slide} setRate={props.setSlide} />
    </div>
  )
}

export default Userform