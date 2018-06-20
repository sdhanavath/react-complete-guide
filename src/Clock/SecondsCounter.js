import React, { Component } from 'react';

class SecondsCounter extends Component {
  constructor() {
    super();
    this.state = { secondsCounter: 0 };
    this._increase();
  }

  _increase() {
    this.setState({ secondsCounter: this.state.secondsCounter + 30 });
    //1000 - 1 second  30,000 - 30 seconds
    setTimeout(this._increase.bind(this), 30000);
  }

  getMessage() {
    let result = '';
     if(this.state.secondsCounter === 30){
      result =  <h1 style={{color:'orange'}}> Please wait... these tests can take few moments to complete.</h1>;
    }
    if(this.state.secondsCounter === 60){
      result = <h1 style={{color:'white'}}> Our diagnostic test help 90% of people resolve their issues online.</h1>;
    }
    if(this.state.secondsCounter === 90){
      result = <h1 style={{color:'green'}}> We are almost done... hang in there!</h1>;
    }
      return result;
    
  }

  render() {
    return this.getMessage();
  }
}

export default SecondsCounter;