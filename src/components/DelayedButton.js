// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{
  handleDelay = (event) =>{
    const eve = event;
    setTimeout(()=>this.props.onDelayedClick(eve),this.props.delay);
  }
  render(){
    return(
      <button onClick={this.handleDelay}>click me</button>
    );
  }
}
