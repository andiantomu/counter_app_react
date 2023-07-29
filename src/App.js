import React from "react";
import './App.css';

class App extends React.Component {
  // Create state, using local state
  constructor(props){
    super(props)
    this.state = {
        number: 0
    }
  }
  // Function to increase the number, using setState
  onIncr = () => {
    let plus = this.state.number + 1;
    this.setState({number: plus})
  }
  // // Function to decrease the number, using setState
  onDecr = () => {
    let minus = this.state.number - 1;
    this.setState({number: minus})
  }
  render () {
    return (
      <div className="main">
        <h1>Counter App</h1>
        <div className="container">
          <button onClick={this.onDecr}>--</button>
          <p>{this.state.number}</p>
          <button onClick={this.onIncr}>++</button>
        </div>
      </div>
    );
  }
}

export default App;
