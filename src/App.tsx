import * as React from "react";
import $ from "jquery";

import './App.css';

interface Props {};

interface State {
  timeString: string;
};

class App extends React.Component<Props,State>{
  constructor(props: Props){
    super(props);
    this.state = {
      timeString: "10:30"
    }
  }

  render(){
    return (
      <div className="App">
        <div className="title-box">
          <h1 className="stroke-single">AFK Mythic Trick Timer</h1>
        </div>
        <div className="column-container">
          <div className="timer-box">
            <h2 className="stroke-single">Emblems Timer</h2>
            <h3 className="stroke-single">10:30</h3>
          </div>
          <div className="timer-box">
            <h2 className="stroke-single">Mythic Gear Timer</h2>
            <h3 className="stroke-single">10:30</h3>
          </div>
          <div className="timer-box">
            <h2 className="stroke-single">Stone Timer</h2>
            <h3 className="stroke-single">10:30</h3>
          </div>
        </div>
        <p className="stroke-single">Come back on January 13, 2021 at 6:08 PM for a 51% chance to get a stone!</p>
      </div>
    )
  }
};

$(function(){
  $('.stroke-single').attr('title', function(){
    return $(this).html();
  });
});

export default App;
