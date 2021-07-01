import React, { Component } from 'react';
import axios from 'axios';


class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      username: '',
      password: ''
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password
    }

    axios.post('http://localhost:7000/login', user)
      .then((response) => {
        if (!response.data.Utype.localeCompare("attendee")) {
          this.props.history.push({
            pathname: '/attendee/dashboard',
            data: response.data.data
          })
        } else if (!response.data.Utype.localeCompare("presenter")) {
          this.props.history.push({
            pathname: '/presenter/dashboard',
            data: response.data.data
          })
        } else if (!response.data.Utype.localeCompare("admin")) {
          this.props.history.push({
            pathname: '/adminDashboard',
            data: response.data.data
          })
        }else if (!response.data.Utype.localeCompare("reviewer")) {
          this.props.history.push({
            pathname: '/workshop',
            data: response.data.data
          })
        }else if (!response.data.Utype.localeCompare("editor")) {
          this.props.history.push({
            pathname: '/post',
            data: response.data.data
          })
        }
        console.log("userid log: " + response.data.data);
        console.log("userT log: " + response.data.Utype);

      })
      .catch((error) => {
        console.log("error: " + error.response.status);
        if (error.response.status === 500)
          alert('Fill all the fields')
        else if (error.response.status === 400)
          alert('Username or password is incorrect')
      })

  }

  render() {
    return (
      <div className="container">
         <br /><br /><br /><br />
        <h2>Login</h2>
        <form onSubmit={this.onFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" name="username" onChange={this.onChange} value={this.state.username} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name="password" onChange={this.onChange} value={this.state.password} />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <br /><br /><br /><br />
        </form>
      </div>
    )
  }
}

export default UserLogin;