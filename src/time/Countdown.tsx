import * as React from "react";

import "../main.css"
import "./Countdown.css"
import Timeblock from "./Timeblock"

interface Props {
  name: string;
  remainingSeconds: number;
};

function timeConvert(totalSeconds: number): {daysSplit: number, hoursSplit: number, minutesSplit: number, secondsSplit: number} {
  let daysCount: number = Math.floor(totalSeconds/86400);
  let remainingSeconds = totalSeconds - daysCount * 86400;
  let hoursCount: number = Math.floor(remainingSeconds/3600)
  remainingSeconds -= hoursCount * 3600;
  let minutesCount: number = Math.floor(remainingSeconds/60);
  let secondsCount: number = totalSeconds%60;

  return {
    daysSplit: daysCount,
    hoursSplit: hoursCount,
    minutesSplit: minutesCount,
    secondsSplit: secondsCount
  };
}

function Countdown(props: Props) {
  const {daysSplit, hoursSplit, minutesSplit, secondsSplit} = timeConvert(props.remainingSeconds);

  const [days,setDays] = React.useState(daysSplit);
  const [hours,setHours] = React.useState(hoursSplit);
  const [minutes,setMinutes] = React.useState(minutesSplit);
  const [seconds,setSeconds] = React.useState(secondsSplit);

  return (
    <div className="timer-box">
      <h2 className="stroke-single">{props.name}</h2>
      <div className="Clockbar">
        <Timeblock name="Days" value={days}/>
        <Timeblock name="Hours" value={hours}/>
        <Timeblock name="Minutes" value={minutes}/>
        <Timeblock name="Seconds" value={seconds}/>
      </div>
    </div>
  );
}

export default Countdown;