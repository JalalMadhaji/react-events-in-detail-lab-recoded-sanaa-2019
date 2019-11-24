// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{
  handleDelay = (event) =>{
    setTimeout((){},this.props.delay);
    this.props.onDelayedClick(event);
  }
  render(){
    return(
      <button onClick={this.handleDelay}>click me</button>
    );
  }
}
