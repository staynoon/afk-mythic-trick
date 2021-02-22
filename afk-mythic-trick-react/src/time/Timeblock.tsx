import * as React from "react";

import "../main.css"
import "./Timeblock.css"

interface Props {
  name: string;
  value: number;
}

function Timeblock(props: Props) {
    return (
      <div className="Timeblock">
        <p className="stroke-single">{props.value}</p>
        <p className="stroke-single">{props.name}</p>
      </div>
    );
}

export default Timeblock;