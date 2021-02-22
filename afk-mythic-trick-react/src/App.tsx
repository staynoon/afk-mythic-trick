import * as React from "react";
import $ from "jquery";

import './App.css';
import "./main.css"
import Timers from "./time/Timers"
import Userform from "./userInput/Userform"

interface Time {
  month: number,
  day: number,
  year: number,
  hour: number,
  minute: number
}

interface TimeLeft {
  stone: number,
  gear: number,
  emblem: number
}

interface SetTime {
  setMonth: React.Dispatch<React.SetStateAction<number>>,
  setDay: React.Dispatch<React.SetStateAction<number>>,
  setYear: React.Dispatch<React.SetStateAction<number>>,
  setHour: React.Dispatch<React.SetStateAction<number>>,
  setMinute: React.Dispatch<React.SetStateAction<number>>
}

interface SetTimer {
  setStone: React.Dispatch<React.SetStateAction<number>>,
  setGear: React.Dispatch<React.SetStateAction<number>>,
  setEmblem: React.Dispatch<React.SetStateAction<number>>
}

interface Progression {
  chapter: number,
  stage: number
}

interface SetProgression {
  setChapter: React.Dispatch<React.SetStateAction<number>>,
  setStage: React.Dispatch<React.SetStateAction<number>>
}

let clearTime: Date;
let stringClearTime: string;

let currentStage: string;
let stageArray: Array<string>;

let dropChance: string;

const emblemTime: number = Math.round(230169);
const gearTime: number = Math.round(610034);
const stoneTime: number = Math.round(737780);
const monthNames: Array<string> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function App() {
  // trick chance cache management
  if (localStorage.getItem("dropChance") === null) {
    dropChance = "51";
    localStorage.setItem("dropChance",dropChance);
  } else {
    dropChance = localStorage.getItem("dropChance")!;
  }

  // trick chance state initialization
  const [rate,setRate] = React.useState<string>(dropChance);

  // clear time storage management
  if (localStorage.getItem("mythicClearTime") === null) { // if no instance of the mythic timer exists in cache
    clearTime = new Date(Date.now());
    stringClearTime = `${monthNames[clearTime.getMonth()]} ${clearTime.getDate()}, ${clearTime.getFullYear()} ${clearTime.getHours()}:${clearTime.getMinutes()}:${clearTime.getSeconds()}`;
    localStorage.setItem("mythicClearTime",stringClearTime);
  } else {
    stringClearTime = localStorage.getItem("mythicClearTime")!;
    clearTime = new Date(stringClearTime);
  }

  let initRate: number = parseInt(rate,10);

  // clear time state setting
  const [month,setMonth] = React.useState<number>(clearTime.getMonth())
  const [day,setDay] = React.useState<number>(clearTime.getDate())
  const [year,setYear] = React.useState<number>(clearTime.getFullYear())
  const [hour,setHour] = React.useState<number>(clearTime.getHours())
  const [minute,setMinute] = React.useState<number>(clearTime.getMinutes())

  // calculate initial timer display time
  let emblemStart = clearTime.getTime() + emblemTime  * initRate * 10 - Date.now() <= 0 ? 0 : Math.round((clearTime.getTime() + emblemTime * initRate * 10 - Date.now())/1000);
  let gearStart = clearTime.getTime() + gearTime * initRate * 10 - Date.now() <= 0 ? 0 : Math.round((clearTime.getTime() + gearTime * initRate * 10 - Date.now())/1000);
  let stoneStart = clearTime.getTime() + stoneTime * initRate * 10 - Date.now() <= 0 ? 0 : Math.round((clearTime.getTime() + stoneTime * initRate * 10 - Date.now())/1000);

  // initial timer state setting
  const [emblem,setEmblem] = React.useState<number>(emblemStart);
  const [gear,setGear] = React.useState<number>(gearStart);
  const [stone,setStone] = React.useState<number>(stoneStart);

  // chapter and stage progression 
  if (localStorage.getItem("stageProgression") === null) {
    currentStage = "16-11";
    localStorage.setItem("stageProgression",currentStage);
  } else {
    currentStage = localStorage.getItem("stageProgression")!;
  }

  // chapter and stage value parsing and state setting
  stageArray = currentStage.split("-");
  const [chapter,setChapter] = React.useState<number>(parseInt(stageArray[0],10));
  const [stage,setStage] = React.useState<number>(parseInt(stageArray[1],10));

  // state and useState groupings into objects
  let chosenTime: Time = {
    month: month,
    day: day,
    year: year,
    hour: hour,
    minute: minute
  }

  let timeLeft: TimeLeft = {
    stone: stone,
    gear: gear,
    emblem: emblem
  }

  let setTime: SetTime = {
    setMonth: setMonth,
    setDay: setDay,
    setYear: setYear,
    setHour: setHour,
    setMinute: setMinute
  }

  let setTimer: SetTimer = {
    setStone: setStone,
    setGear: setGear,
    setEmblem: setEmblem
  }

  let progression: Progression = {
    chapter: chapter,
    stage: stage
  }

  let setProgression: SetProgression = {
    setChapter: setChapter,
    setStage: setStage
  }

  return (
    <div className="App">
      <div className="title-box">
        <h1 className="stroke-single">AFK Mythic Trick Timer</h1>
      </div>
      <Timers progression={progression} timeLeft={timeLeft} rate={rate}/>
      <Userform progression={progression} setProgression={setProgression} chosenTime={chosenTime} setTime={setTime} timeLeft={timeLeft} setTimer={setTimer} slide={rate} setSlide={setRate}/>
    </div>
  )
};

$(function(){
  $('.stroke-single').attr('title', function(){
    return $(this).html();
  });
});

export default App;