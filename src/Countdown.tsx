import * as React from "react";
import "./main.css"
import "./Countdown.css"

interface Props {
    name: string;
    startTime: number;
};

function Countdown(props: Props) {
    return (
        <div className="timer-box">
          <h2 className="stroke-single">{props.name}</h2>
          <h3 className="stroke-single">{props.startTime}</h3>
        </div>
    )
}

export default Countdown;