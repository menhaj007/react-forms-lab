import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars,
      counter: 0,
      message: "",
      messages: []
    };
  }

  handleMacChars = (chars) => {
    // if (this.state.message.length )
  }

  handleMessage = (e) => {
    this.setState({counter: this.state.counter+1})
    if (this.state.counter < this.state.maxChars) {
      this.setState({message: e.target.value})
    }
    // this.state.message.length < this.props.maxChars? this.setState({message: e.target.value}): this.state.message;
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} 
        onChange={e =>this.handleMessage(e)}
        />
        <h1>Counter: {this.state.maxChars - this.state.counter}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
