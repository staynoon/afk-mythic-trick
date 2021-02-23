import * as React from "react"

import "./Trickbutton.css"
import "../main.css"

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
  rate: string,
  setRate: React.Dispatch<React.SetStateAction<string>>
}

let emblemTime: number;
let gearTime: number;
let stoneTime: number;

const monthNames: Array<string> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function Trickbutton(props: Props) {
  const [slide, setSlide] = React.useState<string>(props.rate);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlide(e.currentTarget.value);
  }

  function buttonClick(): void {
    let mythicClearTime = `${monthNames[props.time.month]} ${props.time.day}, ${props.time.year} ${props.time.hour}:${props.time.minute}`;
    localStorage.setItem("mythicClearTime",mythicClearTime);

    let requestURL = '/progression/' + props.progression.chapter + '/' + props.progression.stage;
    fetch(requestURL)
      .then(response => response.json())
      .then(data => {
        stoneTime = data.Stone;
        emblemTime = data.Emblem;
        gearTime = data.Gear
      })

    let claimTime = new Date(mythicClearTime);
    let chance: number = parseInt(slide,10)/100;
    let remainingStoneTime = Math.round(claimTime.getTime()/1000 + stoneTime * chance - Date.now()/1000);
    let remainingGearTime = Math.round(claimTime.getTime()/1000 + gearTime * chance - Date.now()/1000);
    let remainingEmblemTime = Math.round(claimTime.getTime()/1000 + emblemTime * chance - Date.now()/1000);
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

    props.setRate(slide);

    localStorage.setItem("stageProgression",`${props.progression.chapter}-${props.progression.stage}`);
    localStorage.setItem("dropChance",slide);
  }

  return (
    <div>
      <div className="stroke-single">
        <h2>Drop Chance</h2>
        <div className="slider-group">
          <input type="range" id="dropChance" defaultValue={slide} onChange={handleChange} className="slider"></input>
          <div id="percentage">
            <h3>{slide}%</h3>
          </div>
        </div>
      </div>
      <div className="begin-button">
        <a className="stroke-single" onClick={buttonClick}>
          <h2>Let's Trick!</h2>
        </a>
      </div>
    </div>  
  )
}

export default Trickbutton