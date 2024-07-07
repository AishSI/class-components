import { Component } from 'react';
import './App.css';

export class App extends Component {
  state = {
    counter: 0,
  };

  updateCounter = () => {
    console.log('нажато!');
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.updateCounter}>update</button>
        {this.state.counter}
      </div>
    );
  }
}
