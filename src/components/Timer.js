import React, { Component } from 'react';

import Button from './Button';

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
  render() {
    let start = (this.state.time === 0) ?
      <Button className='btn btn-large btn-success' onClick={this.onClick}>Start</Button> : null;

    let stop = (this.state.isOn === true) ?
      <Button className='btn btn-large btn-danger' onClick={this.stopTimer}>Stop</Button> : null;

    let reset = (this.state.time !== 0 && this.state.isOn === false) ?
      <Button className='btn btn-large btn-primary' onClick={this.resetTimer}>Reset</Button> : '';

    let resume = (this.state.time !== 0 && this.state.isOn === false) ?
      <Button className='btn btn-large btn-warning' onClick={this.resumeTimer}>Resume</Button> : '';
    return (
      <div className='timer mt-5'>
        <h1>
          {start}
          {stop}
          {reset}
          {resume}
        </h1>
      </div>
    )
  }
}

export default Timer;
