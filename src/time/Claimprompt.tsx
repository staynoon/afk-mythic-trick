import * as React from "react"

import "../main.css"

const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

interface Props {
  remainingTime: number
}

function Claimprompt(props: Props) {
  let claimTime = Date.now() + props.remainingTime * 1000;
  let claimDate = new Date(claimTime);

  return(
    <div>
      <p className="stroke-single">Come back on {monthNames[claimDate.getMonth()]} {claimDate.getDate()}, {claimDate.getFullYear()} at {claimDate.getHours()}:{claimDate.getMinutes() < 10 ? `0${claimDate.getMinutes()}` : `${claimDate.getMinutes()}`} for a 51% chance to get a stone!</p>
    </div>
  )
}

export default Claimprompt