import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props){ // Ini syntax buat state
    super(props)
    this.state = {
        number: 0
    }
  }
  onIncr = () => {
    let plus = this.state.number + 1;
    this.setState({number: plus})
  }
  onDecr = () => {
    let minus = this.state.number - 1;
    this.setState({number: minus})
  }
  render () {
    return (
      <div>
        <button onClick={this.onDecr}>Decr</button>
        <p>{this.state.number}</p>
        <button onClick={this.onIncr}>Incr</button>
      </div>
    );
  }
}

export default App;
