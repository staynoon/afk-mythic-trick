import * as React from "react"

import "../main.css"
import "./Dateselector.css"

import arrowUp from "../assets/arrowUp.svg"
import arrowDown from "../assets/arrowDown.svg"

const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

function Dateselector() {
  let currentTime = new Date(Date.now());
  const [month,setMonth] = React.useState<number>(currentTime.getMonth())
  const [day,setDay] = React.useState<number>(currentTime.getDate())
  const [year,setYear] = React.useState<number>(currentTime.getFullYear())
  const [hour,setHour] = React.useState<number>(currentTime.getHours())
  const [minute,setMinute] = React.useState<number>(currentTime.getMinutes())

  let incrementMonth = ():void => {
    if (month === 11) {
      setMonth(0);
    } else {
      if (month === 0) {
        if ((year%4) === 0 && day > 29) {
          setDay(29);
        } else if (year%4 != 0 && day > 28) {
          setDay(28);
        }
      } else if ((month === 2 || month === 4 || month === 7 || month === 9) && day > 30) {
        setDay(30);
      }
      setMonth(month + 1);
    }
  }

  let decrementMonth = ():void => {
    if (month === 0) {
      setMonth(11);
    } else {
      if (month === 2) {
        if (year%4 === 0 && day > 29) {
          setDay(29);
        } else if (year%4 != 0 && day > 28) {
          setDay(28);
        }
      } else if ((month === 11 || month === 4 || month === 6 || month === 9) && day > 30) {
        setDay(30);
      }
      setMonth(month - 1);
    }
  }

  let incrementDay = ():void => {
    if ((month === 3 || month === 5 || month === 8 || month === 10) && day >= 30) {
      setDay(1);
    } else if (month === 1 && year%4 === 0 && day >= 29) {
      setDay(1);
    } else if (month === 1 && year%4 != 0 && day >= 28) {
      setDay(1);
    } else if ((month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) && day >= 31) {
      setDay(1);
    } else {
      setDay(day + 1);
    }
  }

  let decrementDay = ():void => {
    if (day <= 1){
      if (month === 3 || month === 5 || month === 8 || month === 10) {
        setDay(30);
      } else if (month === 1 && (year%4) === 0) {
        setDay(29);
      } else if (month === 1 && (year%4) != 0) {
        setDay(28);
      } else if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) {
        setDay(31);
      }
    } else {
      setDay(day - 1);
    }
  }

  let incrementYear = ():void => {
    if ((year%4) === 0 && month === 1 && day >= 29) {
      setDay(28);
    }
    setYear(year + 1);
  }

  let decrementYear = ():void => {
    if ((year%4) === 0 && month === 1 && day >= 29) {
      setDay(28);
    }
    setYear(year - 1);
  }

  let incrementHour = ():void => {
    if (hour === 23) {
      setHour(0);
    } else {
      setHour(hour + 1);
    }
  }

  let decrementHour = ():void => {
    if (hour === 0) {
      setHour(23);
    } else {
      setHour(hour - 1);
    }
  }

  let incrementMinute = (): void => {
    setMinute(minute + 1);
  }

  let decrementMinute = (): void => {
    setMinute(minute - 1);
  }

  return (
    <div>
      <h2>Clear Time</h2>
      <div className="date-box">
        <div className="space">
          <img src={arrowUp} alt="up arrow" className="arrow" onClick={incrementMonth}></img>
          <h3 className="value-container">{monthNames[month]}</h3>
          <img src={arrowDown} alt="down arrow" className="arrow" onClick={decrementMonth}></img>
        </div>
        <div>
          <img src={arrowUp} alt="up arrow" className="arrow" onClick={incrementDay}></img>
          <h3 className="value-container">{day}</h3>
          <img src={arrowDown} alt="down arrow" className="arrow" onClick={decrementDay}></img>
        </div>
        <h3 className="space value-container">,</h3>
        <div className="space">
          <img src={arrowUp} alt="up arrow" className="arrow" onClick={incrementYear}></img>
          <h3 className="value-container">{year}</h3>
          <img src={arrowDown} alt="down arrow" className="arrow" onClick={decrementYear}></img>
        </div>
        <h3 className="value-container space">at</h3>
        <div>
          <img src={arrowUp} alt="up arrow" className="arrow" onClick={incrementHour}></img>
          <h3 className="value-container">{hour < 10 ? `0${hour}` : `${hour}`}</h3>
          <img src={arrowDown} alt="down arrow" className="arrow" onClick={decrementHour}></img>
        </div>
        <h3 className="value-container">:</h3>
        <div>
          <img src={arrowUp} alt="up arrow" className="arrow" onClick={incrementMinute}></img>
          <h3 className="value-container">{minute < 10 ? `0${minute}` : `${minute}`}</h3>
          <img src={arrowDown} alt="down arrow" className="arrow" onClick={decrementMinute}></img>
        </div>
      </div>
    </div>
  )
}

export default Dateselector;