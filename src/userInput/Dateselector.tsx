import * as React from "react"

import "../main.css"
import "./Dateselector.css"

import arrowUp from "../assets/arrowUp.svg"
import arrowDown from "../assets/arrowDown.svg"

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

interface Props {
  month: number,
  setMonth: React.Dispatch<React.SetStateAction<number>>,
  day: number,
  setDay: React.Dispatch<React.SetStateAction<number>>,
  year: number,
  setYear: React.Dispatch<React.SetStateAction<number>>,
  hour: number,
  setHour: React.Dispatch<React.SetStateAction<number>>,
  minute: number,
  setMinute: React.Dispatch<React.SetStateAction<number>>,
}

function Dateselector(props: Props) {
  let incrementMonth = ():void => {
    if (props.month === 11) {
      props.setMonth(0);
    } else {
      if (props.month === 0) {
        if ((props.year%4) === 0 && props.day > 29) {
          props.setDay(29);
        } else if (props.year%4 != 0 && props.day > 28) {
          props.setDay(28);
        }
      } else if ((props.month === 2 || props.month === 4 || props.month === 7 || props.month === 9) && props.day > 30) {
        props.setDay(30);
      }
      props.setMonth(props.month + 1);
    }
  }

  let decrementMonth = ():void => {
    if (props.month === 0) {
      props.setMonth(11);
    } else {
      if (props.month === 2) {
        if (props.year%4 === 0 && props.day > 29) {
          props.setDay(29);
        } else if (props.year%4 != 0 && props.day > 28) {
          props.setDay(28);
        }
      } else if ((props.month === 11 || props.month === 4 || props.month === 6 || props.month === 9) && props.day > 30) {
        props.setDay(30);
      }
      props.setMonth(props.month - 1);
    }
  }

  let incrementDay = ():void => {
    if ((props.month === 3 || props.month === 5 || props.month === 8 || props.month === 10) && props.day >= 30) {
      props.setDay(1);
    } else if (props.month === 1 && props.year%4 === 0 && props.day >= 29) {
      props.setDay(1);
    } else if (props.month === 1 && props.year%4 != 0 && props.day >= 28) {
      props.setDay(1);
    } else if ((props.month === 0 || props.month === 2 || props.month === 4 || props.month === 6 || props.month === 7 || props.month === 9 || props.month === 11) && props.day >= 31) {
      props.setDay(1);
    } else {
      props.setDay(props.day + 1);
    }
  }

  let decrementDay = ():void => {
    if (props.day <= 1){
      if (props.month === 3 || props.month === 5 || props.month === 8 || props.month === 10) {
        props.setDay(30);
      } else if (props.month === 1 && (props.year%4) === 0) {
        props.setDay(29);
      } else if (props.month === 1 && (props.year%4) != 0) {
        props.setDay(28);
      } else if (props.month === 0 || props.month === 2 || props.month === 4 || props.month === 6 || props.month === 7 || props.month === 9 || props.month === 11) {
        props.setDay(31);
      }
    } else {
      props.setDay(props.day - 1);
    }
  }

  let incrementYear = ():void => {
    if ((props.year%4) === 0 && props.month === 1 && props.day >= 29) {
      props.setDay(28);
    }
    props.setYear(props.year + 1);
  }

  let decrementYear = ():void => {
    if ((props.year%4) === 0 && props.month === 1 && props.day >= 29) {
      props.setDay(28);
    }
    props.setYear(props.year - 1);
  }

  let incrementHour = ():void => {
    if (props.hour >= 23) {
      props.setHour(0);
    } else {
      props.setHour(props.hour + 1);
    }
  }

  let decrementHour = ():void => {
    if (props.hour <= 0) {
      props.setHour(23);
    } else {
      props.setHour(props.hour - 1);
    }
  }

  let incrementMinute = (): void => {
    if (props.minute >= 59) {
      props.setMinute(0);
    } else {
    props.setMinute(props.minute + 1);
    }
  }

  let decrementMinute = (): void => {
    if (props.minute <= 0) {
      props.setMinute(59);
    } else {
    props.setMinute(props.minute - 1);
    }
  }

  return (
    <div>
      <h2>Clear Time</h2>
      <div className="date-box">
        <div className="space">
          <img src={arrowUp} alt="up arrow" className="arrow" onClick={incrementMonth}></img>
          <h3 className="value-container">{monthNames[props.month]}</h3>
          <img src={arrowDown} alt="down arrow" className="arrow" onClick={decrementMonth}></img>
        </div>
        <div>
          <img src={arrowUp} alt="up arrow" className="arrow" onClick={incrementDay}></img>
          <h3 className="value-container">{props.day}</h3>
          <img src={arrowDown} alt="down arrow" className="arrow" onClick={decrementDay}></img>
        </div>
        <h3 className="space value-container">,</h3>
        <div className="space">
          <img src={arrowUp} alt="up arrow" className="arrow" onClick={incrementYear}></img>
          <h3 className="value-container">{props.year}</h3>
          <img src={arrowDown} alt="down arrow" className="arrow" onClick={decrementYear}></img>
        </div>
        <h3 className="value-container space">at</h3>
        <div>
          <img src={arrowUp} alt="up arrow" className="arrow" onClick={incrementHour}></img>
          <h3 className="value-container">{props.hour < 10 ? `0${props.hour}` : `${props.hour}`}</h3>
          <img src={arrowDown} alt="down arrow" className="arrow" onClick={decrementHour}></img>
        </div>
        <h3 className="value-container">:</h3>
        <div>
          <img src={arrowUp} alt="up arrow" className="arrow" onClick={incrementMinute}></img>
          <h3 className="value-container">{props.minute < 10 ? `0${props.minute}` : `${props.minute}`}</h3>
          <img src={arrowDown} alt="down arrow" className="arrow" onClick={decrementMinute}></img>
        </div>
      </div>
    </div>
  )
}

export default Dateselector;