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

interface AFKTimers {
  Stone: string,
  Emblems: string,
  Gear: string
}

let emblemTime: number;
let gearTime: number;
let stoneTime: number;

let remainingEmblemTime: number;
let remainingGearTime: number;
let remainingStoneTime: number;

const monthNames: Array<string> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

async function getTimer (chapter: number, stage: number): Promise<AFKTimers> {
  let requestURL: string = '/progression/' + chapter + '/' + stage;
  const responseData = await fetch(requestURL)
    .then(response => response.json());
  
  return responseData;
}

function Trickbutton(props: Props) {
  const [slide, setSlide] = React.useState<string>(props.rate);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlide(e.currentTarget.value);
  }

  function buttonClick(): void {
    let mythicClearTime = `${monthNames[props.time.month]} ${props.time.day}, ${props.time.year} ${props.time.hour}:${props.time.minute}`;
    localStorage.setItem("mythicClearTime",mythicClearTime);
    let claimTime = new Date(mythicClearTime);
    let chance: number = parseInt(slide,10)/100;

    localStorage.setItem("stageProgression",`${props.progression.chapter}-${props.progression.stage}`);
    localStorage.setItem("dropChance",slide);

    getTimer(props.progression.chapter,props.progression.stage)
      .then(data => {
        remainingStoneTime = Math.round(claimTime.getTime()/1000 + parseInt(data.Stone,10) * chance - Date.now()/1000);
        remainingGearTime = Math.round(claimTime.getTime()/1000 + parseInt(data.Gear,10) * chance - Date.now()/1000);
        remainingEmblemTime = Math.round(claimTime.getTime()/1000 + parseInt(data.Emblems,10) * chance - Date.now()/1000);

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
      })
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