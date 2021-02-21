import * as React from "react"

import "./Trickbutton.css"

interface Props {
  time: {
    month: number,
    day: number,
    year: number,
    hour: number,
    minute: number
  },
  timeLeft: {
    stone: number,
    gear: number,
    emblem: number
  },
  setTimer: {
    setStone: React.Dispatch<React.SetStateAction<number>>,
    setGear: React.Dispatch<React.SetStateAction<number>>,
    setEmblem: React.Dispatch<React.SetStateAction<number>>
  }
  progression: {
    chapter: number,
    stage: number
  }
}

let chance: number = 0.51;

const emblemTime: number = Math.round(230169 * chance);
const gearTime: number = Math.round(610034 * chance);
const stoneTime: number = Math.round(737780 * chance);

const monthNames: Array<string> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function Trickbutton(props: Props) {
  function buttonClick(): void {
    let mythicClearTime = `${monthNames[props.time.month]} ${props.time.day}, ${props.time.year} ${props.time.hour}:${props.time.minute}`;
    localStorage.setItem("mythicClearTime",mythicClearTime);
    let claimTime = new Date(mythicClearTime);
    let remainingStoneTime = Math.round(claimTime.getTime()/1000) + stoneTime - Math.round(Date.now()/1000);
    let remainingGearTime = Math.round(claimTime.getTime()/1000) + gearTime - Math.round(Date.now()/1000);
    let remainingEmblemTime = Math.round(claimTime.getTime()/1000) + emblemTime - Math.round(Date.now()/1000);
    if (remainingEmblemTime <= 0) {
      props.setTimer.setEmblem(0);
    } else {
      props.setTimer.setEmblem(remainingEmblemTime);
    }
    if (remainingGearTime <= 0) {
      props.setTimer.setGear(0);
    } else {
      props.setTimer.setGear(remainingGearTime);
    }
    if (remainingStoneTime <= 0) {
      props.setTimer.setStone(0);
    } else {
      props.setTimer.setStone(remainingStoneTime);
    }

    localStorage.setItem("stageProgression",`${props.progression.chapter}-${props.progression.stage}`);
  }

  return (
    <div className="begin-button" onClick={buttonClick}>
      <h2>Let's Trick!</h2>
    </div>
  )
}

export default Trickbutton