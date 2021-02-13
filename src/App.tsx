import * as React from "react";

import './App.css';

type Props = {};

type State = {
  timeString: string;
};

class App extends React.Component<Props,State>{
  render(){
    return (
      <div className="App">
        <h1>AFK Mythic Trick Timer</h1>
        <h2>Emblems Timer</h2>
        <p>10:30</p>
        <h2>Mythic Gear Timer</h2>
        <p>10:30</p>
        <h2>Stone Timer</h2>
        <p>10:30</p>
      </div>
  )
  }
};

export default App;
