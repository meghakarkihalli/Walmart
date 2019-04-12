import React, { Component } from 'react'; 
import './App.css';
import Clock from './clock.js';

var temp; //hold the Interval ID returned by setInterval()

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      hr:0, //holding input
      min:0,
      sec:0,
      hr1:0,//handling changes
      min1:0,
      sec1:0,
      time:" "
    }
  }
    
  //*****Assigning the entered values to the state for further activities*****  

  handleHour=(e)=>this.setState({hr1:e.target.value,hr:e.target.value})
  handleMin=(e)=>this.setState({min1:e.target.value,min:e.target.value})
  handleSec=(e)=>this.setState({sec1:e.target.value,sec:e.target.value})


  //******Handling the countdown on click of start button*******
  startClock=()=>{
    this.setState({hr1:0, min1:0, sec1:0})
    temp = setInterval(()=>{
    if(this.state.sec === 0 ) //checking whether seconds is zero
    {
      if(this.state.min === 0 ) //checking whether seconds is zero
      {
        if(this.state.hr === 0 ) //checking whether seconds is zero
          clearInterval(temp); // when hours, minute and seconds is zero the Interval ID is cleared
        else // when hour is not zero reduces the count of hour, sets min to 59 and sets seconds to 60
          this.setState({hr:this.state.hr-1, min:59, sec:60})
      }
      else // when minute is not zero reduces the count of minute and sets seconds to 60 
        this.setState({min:this.state.min-1, sec:60})
    }    
    else // when seconds is not zero reduces the count of second 
    {
      this.setState({sec:this.state.sec-1})
      //console.log(this.state)
    }  
    }, 1000)
  }


  //*****Resetting the countdown action by clearing the Interval ID*****
  resetAll=()=>{
    clearInterval(temp)
    this.setState({hr:0, min:0, sec:0})//resetting the state data to zero.
  }

  render() {
    return (
      <div className="App">
        Hours <input type="number" min="0" max="24" value={this.state.hr1} onChange={this.handleHour}/>
        Minutes <input type="number" min="0" max="60" value={this.state.min1} onChange={this.handleMin}/>
        Seconds <input type="number" min="0" max="60" value={this.state.sec1} onChange={this.handleSec}/>
        <button onClick={this.startClock}>Start</button><br/><br/>
        <Clock time={this.state} />
        <button onClick={this.resetAll}>Reset</button>
      </div>
      )
}
}
export default App;