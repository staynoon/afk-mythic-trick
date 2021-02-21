import * as React from "react"

import "../main.css"
import "./Dateselector.css"

import arrowUp from "../assets/arrowUp.svg"
import arrowDown from "../assets/arrowDown.svg"

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

interface Props {
  time: {
    month: number,
    day: number,
    year: number,
    hour: number,
    minute: number
  },
  setTime: {
    setMonth: React.Dispatch<React.SetStateAction<number>>,
    setDay: React.Dispatch<React.SetStateAction<number>>,
    setYear: React.Dispatch<React.SetStateAction<number>>,
    setHour: React.Dispatch<React.SetStateAction<number>>,
    setMinute: React.Dispatch<React.SetStateAction<number>>
  }
}

function Dateselector(props: Props) {
  let incrementMonth = ():void => {
    if (props.time.month === 11) {
      props.setTime.setMonth(0);
    } else {
      if (props.time.month === 0) {
        if ((props.time.year%4) === 0 && props.time.day > 29) {
          props.setTime.setDay(29);
        } else if (props.time.year%4 != 0 && props.time.day > 28) {
          props.setTime.setDay(28);
        }
      } else if ((props.time.month === 2 || props.time.month === 4 || props.time.month === 7 || props.time.month === 9) && props.time.day > 30) {
        props.setTime.setDay(30);
      }
      props.setTime.setMonth(props.time.month + 1);
    }
  }

  let decrementMonth = ():void => {
    if (props.time.month === 0) {
      props.setTime.setMonth(11);
    } else {
      if (props.time.month === 2) {
        if (props.time.year%4 === 0 && props.time.day > 29) {
          props.setTime.setDay(29);
        } else if (props.time.year%4 != 0 && props.time.day > 28) {
          props.setTime.setDay(28);
        }
      } else if ((props.time.month === 11 || props.time.month === 4 || props.time.month === 6 || props.time.month === 9) && props.time.day > 30) {
        props.setTime.setDay(30);
      }
      props.setTime.setMonth(props.time.month - 1);
    }
  }

  let incrementDay = ():void => {
    if ((props.time.month === 3 || props.time.month === 5 || props.time.month === 8 || props.time.month === 10) && props.time.day >= 30) {
      props.setTime.setDay(1);
    } else if (props.time.month === 1 && props.time.year%4 === 0 && props.time.day >= 29) {
      props.setTime.setDay(1);
    } else if (props.time.month === 1 && props.time.year%4 != 0 && props.time.day >= 28) {
      props.setTime.setDay(1);
    } else if ((props.time.month === 0 || props.time.month === 2 || props.time.month === 4 || props.time.month === 6 || props.time.month === 7 || props.time.month === 9 || props.time.month === 11) && props.time.day >= 31) {
      props.setTime.setDay(1);
    } else {
      props.setTime.setDay(props.time.day + 1);
    }
  }

  let decrementDay = ():void => {
    if (props.time.day <= 1){
      if (props.time.month === 3 || props.time.month === 5 || props.time.month === 8 || props.time.month === 10) {
        props.setTime.setDay(30);
      } else if (props.time.month === 1 && (props.time.year%4) === 0) {
        props.setTime.setDay(29);
      } else if (props.time.month === 1 && (props.time.year%4) != 0) {
        props.setTime.setDay(28);
      } else if (props.time.month === 0 || props.time.month === 2 || props.time.month === 4 || props.time.month === 6 || props.time.month === 7 || props.time.month === 9 || props.time.month === 11) {
        props.setTime.setDay(31);
      }
    } else {
      props.setTime.setDay(props.time.day - 1);
    }
  }

  let incrementYear = ():void => {
    if ((props.time.year%4) === 0 && props.time.month === 1 && props.time.day >= 29) {
      props.setTime.setDay(28);
    }
    props.setTime.setYear(props.time.year + 1);
  }

  let decrementYear = ():void => {
    if ((props.time.year%4) === 0 && props.time.month === 1 && props.time.day >= 29) {
      props.setTime.setDay(28);
    }
    props.setTime.setYear(props.time.year - 1);
  }

  let incrementHour = ():void => {
    if (props.time.hour >= 23) {
      props.setTime.setHour(0);
    } else {
      props.setTime.setHour(props.time.hour + 1);
    }
  }

  let decrementHour = ():void => {
    if (props.time.hour <= 0) {
      props.setTime.setHour(23);
    } else {
      props.setTime.setHour(props.time.hour - 1);
    }
  }

  let incrementMinute = (): void => {
    if (props.time.minute >= 59) {
      props.setTime.setMinute(0);
    } else {
    props.setTime.setMinute(props.time.minute + 1);
    }
  }

  let decrementMinute = (): void => {
    if (props.time.minute <= 0) {
      props.setTime.setMinute(59);
    } else {
    props.setTime.setMinute(props.time.minute - 1);
    }
  }

  return (
    <div>
      <h2>Clear Time</h2>
      <div className="date-box">
        <div className="space">
          <img src={arrowUp} alt="up arrow" className="arrow" onClick={incrementMonth}></img>
          <h3 className="value-container">{monthNames[props.time.month]}</h3>
          <img src={arrowDown} alt="down arrow" className="arrow" onClick={decrementMonth}></img>
        </div>
        <div>
          <img src={arrowUp} alt="up arrow" className="arrow" onClick={incrementDay}></img>
          <h3 className="value-container">{props.time.day}</h3>
          <img src={arrowDown} alt="down arrow" className="arrow" onClick={decrementDay}></img>
        </div>
        <h3 className="space value-container">,</h3>
        <div className="space">
          <img src={arrowUp} alt="up arrow" className="arrow" onClick={incrementYear}></img>
          <h3 className="value-container">{props.time.year}</h3>
          <img src={arrowDown} alt="down arrow" className="arrow" onClick={decrementYear}></img>
        </div>
        <h3 className="value-container space">at</h3>
        <div>
          <img src={arrowUp} alt="up arrow" className="arrow" onClick={incrementHour}></img>
          <h3 className="value-container">{props.time.hour < 10 ? `0${props.time.hour}` : `${props.time.hour}`}</h3>
          <img src={arrowDown} alt="down arrow" className="arrow" onClick={decrementHour}></img>
        </div>
        <h3 className="value-container">:</h3>
        <div>
          <img src={arrowUp} alt="up arrow" className="arrow" onClick={incrementMinute}></img>
          <h3 className="value-container">{props.time.minute < 10 ? `0${props.time.minute}` : `${props.time.minute}`}</h3>
          <img src={arrowDown} alt="down arrow" className="arrow" onClick={decrementMinute}></img>
        </div>
      </div>
    </div>
  )
}

export default Dateselector;