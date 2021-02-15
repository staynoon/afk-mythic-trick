import * as React from "react";
import $ from "jquery";

import './App.css';
import "./main.css"
import Countdown from "./Countdown"

function App() {

  return (
    <div className="App">
      <div className="title-box">
        <h1 className="stroke-single">AFK Mythic Trick Timer</h1>
      </div>
      <div className="row-container">
        <Countdown name="Emblems Timer" remainingSeconds={1000} />
        <Countdown name="Mythic Gear Timer" remainingSeconds={5000} />
        <Countdown name="Stone Timer" remainingSeconds={500} />
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