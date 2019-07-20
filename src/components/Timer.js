import React, { Component } from 'react';

import Button from './Button';
import ConvertTime from '../supportfunctions/Secondstohhmmss';
import '../css/Timer.css'

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      start: 0,
      array: [],
      isOn: false
    }
  }

  startTimer = (e) => {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true
    });
    this.timer = setInterval(() => {
      const time = (Date.now() - this.state.start) / 1000;
      // console.log('date', Date.now());
      let result = ConvertTime(time);
      this.setState({
        time: result
      })
    }, 1000);
  }

  stopTimer = (e) => {
    clearInterval(this.timer);
    console.log('stop', typeof this.state.time);
    const list = this.state.array;
    list.push(this.state.time);

    this.setState({
      isOn: false
    });
  }
  resetTimer = (e) => {
    this.setState({
      time: 0,
      start: 0,
      array: [],
      isOn: false
    });
  }
  render() {
    console.log('end', this.state.Datenow)
    let start = (this.state.isOn === false && this.state.time === 0) ?
      <Button className='btn btn-large btn-success' onClick={this.startTimer}>Start</Button> : null;

    let stop = (this.state.isOn === true) ?
      <Button className='btn btn-large btn-danger' onClick={this.stopTimer}>Stop</Button> : null;

    let reset = (this.state.time !== 0 && this.state.isOn === false) ?
      <Button className='btn btn-large btn-primary' onClick={this.resetTimer}>Reset</Button> : '';
    return (
      <div className='wholetimer mt-5'>
        <h1>Simple Timer Application</h1>
        <div className="container">
          <div className='timer'>
            {this.state.time === 0 ? <h3>00:00:00</h3> : <h3>{this.state.time}</h3>}
            <div className="col-lg-8 m-auto">
              {start}
              {stop}
              {reset}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Timer;
