import React from 'react';
import logo from './logo.svg';
import './App.css';
import BoxContainer from './BoxContainer';

class ButtonInc extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>Increment</button>
  }
}

class ButtonDec extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>Decrement</button>
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  incrementHandler() {
    
  }
  render() {
    const {
      number,
    } = this.state;
    return (
      <div className="app">
        <div className="container">
          <ButtonInc onClick={() => this.setState({
            number: number + 1
          })}/>
          <ButtonDec onClick={() => this.setState({
            number: number - 1
          })}/>
          <span>{number}</span>
        </div>
      </div>
    );
  }
}
