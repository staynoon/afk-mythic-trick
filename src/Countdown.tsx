import * as React from "react";

import "./main.css"
import "./Countdown.css"
import Clockbar from "./time/Clockbar"

interface Props {
  name: string;
  remainingSeconds: number;
};

function Countdown(props: Props) {
  return (
    <div className="timer-box">
      <h2 className="stroke-single">{props.name}</h2>
      <Clockbar remainingSeconds={props.remainingSeconds}/>
    </div>
  );
}

export default Countdown;