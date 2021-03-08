import React from 'react';
import logo from './logo.svg';
import './App.css';
import BoxContainer from './BoxContainer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      numberTest: 1,
      update: 1,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickTest = this.handleClickTest.bind(this);
  }
  handleClick() {
    console.log(this.state.number);
    this.setState({
      number: this.state.number + 1,
    });
  }
  handleClickTest() {
    console.log(this.state.numberTest)
    this.setState({
      numberTest:this.state.numberTest * 2,
    });
  }
  render() {
    const test = "100";
    return (
      <div className="App" title={test}>
        <header className="App-header">
          <button onClick={this.handleClick}>
            <img
              src={logo}
              className="App-logo"
              alt="logo"
            />
          </button>
          <button onClick={this.handleClickTest}>
            Test
          </button>
          <p>
            <BoxContainer 
            numberTest={this.state.numberTest}
            number={this.state.number}/>
          </p>
        </header>
      </div>
    );
  }
}
