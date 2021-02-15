import * as React from "react";

import Timeblock from "./Timeblock"
import "./Clockbar.css"

interface Props {
  remainingSeconds: number
}

function timeConvert(totalSeconds: number): {days: number, hours: number, minutes: number, seconds: number} {
  let daysCount: number = Math.floor(totalSeconds/86400);
  let remainingSeconds = totalSeconds - daysCount * 86400;
  let hoursCount: number = Math.floor(remainingSeconds/3600)
  remainingSeconds -= hoursCount * 3600;
  let minutesCount: number = Math.floor(remainingSeconds/60);
  let secondsCount: number = totalSeconds%60;

  return {
    days: daysCount,
    hours: hoursCount,
    minutes: minutesCount,
    seconds: secondsCount
  };
}

function Clockbar(props: Props) {

  const {days, hours, minutes, seconds} = timeConvert(props.remainingSeconds);

  return(
    <div className="Clockbar">
      <Timeblock name="Days" value={days}/>
      <Timeblock name="Hours" value={hours}/>
      <Timeblock name="Minutes" value={minutes}/>
      <Timeblock name="Seconds" value={seconds}/>
    </div>
  );
}

export default Clockbar;