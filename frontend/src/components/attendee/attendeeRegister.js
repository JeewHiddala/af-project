import React, { Component } from 'react';
import axios from 'axios';


class CreateAttendee extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      name: '',
      email: '',
      mobileNo: '',
      username: '',
      password: '',
      workplace: '',
      jobRole: '',
      type: 'physical',
      country: '',
      emergencyContactNo: '',
      emergencyContactName: ''
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChange(e) {
    this.setState({ type: e.target.value });
  }


  onFormSubmit(e) {
    e.preventDefault();
    let attendee = {
      name: this.state.name,
      email: this.state.email,
      mobileNo: this.state.mobileNo,
      username: this.state.username,
      password: this.state.password,
      workplace: this.state.workplace,
      jobRole: this.state.jobRole,
      type: this.state.type,
      country: this.state.country,
      emergencyContactNo: this.state.emergencyContactNo,
      emergencyContactName: this.state.emergencyContactName
    }

    axios.post('http://localhost:7000/attendee/create', attendee)
      .then((response) => {
        this.props.history.push('/login')
        console.log("userid reg: "+response.data.data );
        // this.props.history.push({
        //   pathname: '/login',
        //   data: response.data.data 
        // })
        
        alert('Data successfully inserted')
      })
      .catch((error) => {
        if (error.response.status === 500)
          alert('Username is already taken')
        else if (error.response.status === 400)
        alert('Data not inserted')
      })

  }

  render() {
    return (
      <div className="container">
        <h2>Attendee Registration</h2>
        <form onSubmit={this.onFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="name" onChange={this.onChange} value={this.state.name} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="text" className="form-control" name="email" onChange={this.onChange} value={this.state.email} />
          </div>
          <div className="mb-3">
            <label className="form-label">Mobile number</label>
            <input type="text" className="form-control" name="mobileNo" onChange={this.onChange} value={this.state.mobileNo} />
          </div>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" name="username" onChange={this.onChange} value={this.state.username} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name="password" onChange={this.onChange} value={this.state.password} />
          </div>
          <div className="mb-3">
            <label className="form-label">Work place</label>
            <input type="text" className="form-control" name="workplace" onChange={this.onChange} value={this.state.workplace} />
          </div>
          <div className="mb-3">
            <label className="form-label">Job role</label>
            <input type="text" className="form-control" name="jobRole" onChange={this.onChange} value={this.state.jobRole} />
          </div>
          <div className="mb-3">
            <label className="form-label">Type</label>
            <select className="form-select" value={this.state.type} onChange={this.handleChange}>
              <option value="physical">Physical Attendee</option>
              <option value="virtual">Virtual Attendee</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Country</label>
            <input type="text" className="form-control" name="country" onChange={this.onChange} value={this.state.country} />
          </div>
          <div className="mb-3">
            <label className="form-label">Emergency contact number</label>
            <input type="text" className="form-control" name="emergencyContactNo" onChange={this.onChange} value={this.state.emergencyContactNo} />
          </div>
          <div className="mb-3">
            <label className="form-label">Emergency contact name</label>
            <input type="text" className="form-control" name="emergencyContactName" onChange={this.onChange} value={this.state.emergencyContactName} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <br /><br /><br /><br />
        </form>
      </div>
    )
  }
}

export default CreateAttendee;