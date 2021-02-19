import * as React from "react";
import $ from "jquery";

import './App.css';
import "./main.css"
import Countdown from "./time/Countdown"
import Claimprompt from "./time/Claimprompt"
import Stage from "./userInput/Stage"
import Dateselector from "./userInput/Dateselector"

let currentTime: Date;
let mythicClearTime: string;
let claimTime: Date;

let chance: number = 0.51;

const emblemTime: number = Math.round(230169 * chance);
const gearTime: number = Math.round(610034 * chance);
const stoneTime: number = Math.round(737780 * chance);
const monthNames: Array<string> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function App() {
  if (localStorage.getItem("mythicClearTime") === null) {
    currentTime = new Date(Date.now());
    mythicClearTime = `${monthNames[currentTime.getMonth()]} ${currentTime.getDate()}, ${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    localStorage.setItem("mythicClearTime",mythicClearTime);
  } else {
    let loadTime: string = localStorage.getItem("mythicClearTime")!;
    currentTime = new Date(loadTime);
  }

  let emblemStart = currentTime.getTime() + emblemTime * 1000 - Date.now() <= 0 ? 0 : Math.round((currentTime.getTime() + emblemTime * 1000 - Date.now())/1000);
  let gearStart = currentTime.getTime() + gearTime * 1000 - Date.now() <= 0 ? 0 : Math.round((currentTime.getTime() + gearTime * 1000 - Date.now())/1000);
  let stoneStart = currentTime.getTime() + stoneTime * 1000 - Date.now() <= 0 ? 0 : Math.round((currentTime.getTime() + stoneTime * 1000 - Date.now())/1000);

  const [month,setMonth] = React.useState<number>(currentTime.getMonth())
  const [day,setDay] = React.useState<number>(currentTime.getDate())
  const [year,setYear] = React.useState<number>(currentTime.getFullYear())
  const [hour,setHour] = React.useState<number>(currentTime.getHours())
  const [minute,setMinute] = React.useState<number>(currentTime.getMinutes())

  const [chapter,setChapter] = React.useState<number>(34);
  const [stage,setStage] = React.useState<number>(7);

  const [emblem,setEmblem] = React.useState<number>(emblemStart);
  const [gear,setGear] = React.useState<number>(gearStart);
  const [stone,setStone] = React.useState<number>(stoneStart);

  function buttonClick(): void {
    mythicClearTime = `${monthNames[month]} ${day}, ${year} ${hour}:${minute}`;
    localStorage.setItem("mythicClearTime",mythicClearTime);
    claimTime = new Date(mythicClearTime);
    let remainingStoneTime = Math.round(claimTime.getTime()/1000) + stoneTime - Math.round(Date.now()/1000);
    let remainingGearTime = Math.round(claimTime.getTime()/1000) + gearTime - Math.round(Date.now()/1000);
    let remainingEmblemTime = Math.round(claimTime.getTime()/1000) + emblemTime - Math.round(Date.now()/1000);
    if (remainingEmblemTime <= 0) {
      setEmblem(0);
    } else {
      setEmblem(remainingEmblemTime);
    }
    if (remainingGearTime <= 0) {
      setGear(0);
    } else {
      setGear(remainingGearTime);
    }
    if (remainingStoneTime <= 0) {
      setStone(0);
    } else {
      setStone(remainingStoneTime);
    }
  }

  function clearCache(): void {
    localStorage.clear();
  }

  return (
    <div className="App">
      <div className="title-box">
        <h1 className="stroke-single">AFK Mythic Trick Timer</h1>
      </div>
      <Claimprompt remainingTime={stone}/>
      <div className="row-container">
        <Countdown name="Emblems Timer" remainingSeconds={emblem} />
        <Countdown name="Mythic Gear Timer" remainingSeconds={gear} />
        <Countdown name="Stone Timer" remainingSeconds={stone} />
      </div>
      <div>
        <Stage chapter={chapter} setChapter={setChapter} stage={stage} setStage={setStage} />
        <Dateselector month={month} setMonth={setMonth} day={day} setDay={setDay} year={year} setYear={setYear} hour={hour} setHour={setHour} minute={minute} setMinute={setMinute} />
        <div className="begin-button" onClick={buttonClick}>
          <h2>Let's Trick!</h2>
        </div>
      </div>
    </div>
  )
};

$(function(){
  $('.stroke-single').attr('title', function(){
    return $(this).html();
  });
});

export default App;