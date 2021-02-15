import * as React from "react";
import $ from "jquery";

import './App.css';
import "./main.css"
import Countdown from "./Countdown"

interface Props {};

interface State {
  timeString: string;
};

function App() {

  return (
    <div className="App">
      <div className="title-box">
        <h1 className="stroke-single">AFK Mythic Trick Timer</h1>
      </div>
      <div className="column-container">
        <Countdown name="Emblems Timer" startTime={500} />
        <Countdown name="Mythic Gear Timer" startTime={500} />
        <Countdown name="Stone Timer" startTime={500} />
      </div>
      <p className="stroke-single">Come back on January 13, 2021 at 6:08 PM for a 51% chance to get a stone!</p>
    </div>
  )
};

$(function(){
  $('.stroke-single').attr('title', function(){
    return $(this).html();
  });
});

export default App;