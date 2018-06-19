import React, { Component } from 'react';

class TimeComponent extends Component {
  constructor(props){
    super(props);
    this.state = { time: Date.now(),
      counter: 0};
  }

componentDidMount() {
 const seconds = this.state.counter;
  this.interval = setInterval(() => this.setState({ time: Date.now(), counter: seconds+1 }), 30000);
}
componentWillUnmount() {
  clearInterval(this.interval);
}

updateCounter(){
  this.setState({ time: this.state.count+1 });
}

  render(){
      
      if(this.state.count === 0){
         return <div>  We are started working...</div>
      }
      if(this.state.count === 1){
        return <div> 30 secnonds over... We are still processing...your request </div>
      }
      if(this.state.count === 2){
        return <div> 60 secnonds over... We are still processing...your request </div>
      }
      if(this.state.count === 3){
        return <div> 90 secnonds over... We are still processing...your request </div>
      }
     return <div>  Looks like there is some issue... our agent will call you soon...</div>
  }
  
}

export default TimeComponent;