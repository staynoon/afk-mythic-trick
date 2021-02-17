import * as React from "react";
import $ from "jquery";

import './App.css';
import "./main.css"
import Countdown from "./time/Countdown"
import Claimprompt from "./time/Claimprompt"
import Stage from "./userInput/Stage"

function App() {
  let emblemTime = 5;
  let gearTime = 610034;
  let stoneTime = 737780;

  return (
    <div className="App">
      <div className="title-box">
        <h1 className="stroke-single">AFK Mythic Trick Timer</h1>
      </div>
      <div className="row-container">
        <Countdown name="Emblems Timer" remainingSeconds={emblemTime} />
        <Countdown name="Mythic Gear Timer" remainingSeconds={gearTime} />
        <Countdown name="Stone Timer" remainingSeconds={stoneTime} />
      </div>
      <Claimprompt remainingTime={stoneTime}/>
      <div>
        <Stage />
        <div>
          <h2>Clear Time</h2>
          <h3>February 13, 2021 10:30</h3>
        </div>
        <h2>Drop Rate</h2>
      </div>
    </div>
  )
};

$(function(){
  $('.stroke-single').attr('title', function(){
    return $(this).html();
  });
});

export default App;