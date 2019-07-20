import React, { Component } from 'react'

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
      <button type='button' style={{ width: "150px", borderRadius: "3px", letterSpacing: "1.5px" }} className="btn btn-large btn-success "
        onClick={this.startTimer}>Start</button> : null;

    let stop = (this.state.isOn === true) ?
      <button type='button' style={{ width: "150px", borderRadius: "3px", letterSpacing: "1.5px" }} className='btn btn-large btn-danger' onClick={this.stopTimer}>Stop</button> : null;

    let reset = (this.state.time !== 0 && this.state.isOn === false) ?
      <button type='button' style={{ width: "150px", borderRadius: "3px", letterSpacing: "1.5px" }} className='btn btn-large btn-primary' onClick={this.resetTimer}>Reset</button> : '';

    let resume = (this.state.time !== 0 && this.state.isOn === false) ?
      <button type='button' style={{ width: "150px", borderRadius: "3px", letterSpacing: "1.5px" }} className='btn btn-large btn-warning' onClick={this.startTimer}>Resume</button> : '';
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
