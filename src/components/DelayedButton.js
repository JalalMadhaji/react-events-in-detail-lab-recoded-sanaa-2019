// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{
  handleDelay = (event) =>{
    setTimeout(myFen,this.props.delay);
    function myFen(){
      this.props.onDelayedClick(event);
    }
  }
  render(){
    return(
      <button onClick={this.handleDelay}>click me</button>
    );
  }
}
