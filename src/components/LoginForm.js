import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: "",
      password: "",
      submittedData: []
    };
  }

  handleInputChange = (e) => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submitHandler = (e) => {
    e.preventDefault();
    let formData = {username: this.state.username, password: this.state.password}
    let arrayData = this.state.submittedData.concat(formData);
    this.setState({
      submittedData: arrayData
    })
  }
  validation = (e) => {
    if (e.target.value.length > 0) {
      
    }
  }


  render() {
    return (
      <form onSubmit={e => this.submitHandler(e)}>
        <div>
          <label>
            Username
            <input 
            id="username" 
            name="username" 
            type="text"
            value={this.state.username}
            onChange={e => this.handleInputChange(e)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password"
            name="password" 
            type="password" 
            value={this.state.password}
            onChange={e => this.handleInputChange(e)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
