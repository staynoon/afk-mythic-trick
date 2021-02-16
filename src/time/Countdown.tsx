import * as React from "react";

import "../main.css"
import "./Countdown.css"
import Timeblock from "./Timeblock"

interface Props {
  name: string;
  remainingSeconds: number;
};

interface State {
  remaining: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function Countdown(props: Props) {
  const [time,setTime] = React.useState<State> ({
    remaining: props.remainingSeconds,
    days: Math.floor(props.remainingSeconds/86400),
    hours: Math.floor((props.remainingSeconds%86400)/3600),
    minutes: Math.floor((props.remainingSeconds%3600)/60),
    seconds: props.remainingSeconds%60
  });

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTime({
        remaining: time.remaining - 1,
        days: Math.floor((time.remaining - 1)/86400),
        hours: Math.floor(((time.remaining - 1)%86400)/3600),
        minutes: Math.floor(((time.remaining - 1)%3600)/60),
        seconds: (time.remaining - 1)%60
      })
    },1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="timer-box">
      <h2 className="stroke-single">{props.name}</h2>
      <div className="Clockbar">
        <Timeblock name="Days" value={time.days}/>
        <Timeblock name="Hours" value={time.hours}/>
        <Timeblock name="Minutes" value={time.minutes}/>
        <Timeblock name="Seconds" value={time.seconds}/>
      </div>
    </div>
  );
}

export default Countdown;