import React, { Component } from 'react';
import axios from 'axios';


class CreatePresenter extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleSessionChange = this.handleSessionChange.bind(this);
    this.handlePresenterChange = this.handlePresenterChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      name: '',
      email: '',
      mobileNo: '',
      username: '',
      password: '',
      workplace: '',
      presenterType: 'Researcher',
      sessionType: 'Physical',
      jobRole: '',
      researchArea: '',
      country: ''
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSessionChange(e) {
    this.setState({ sessionType: e.target.value });
  }

  handlePresenterChange(e) {
    this.setState({ presenterType: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    let presenter = {
      name: this.state.name,
      email: this.state.email,
      mobileNo: this.state.mobileNo,
      username: this.state.username,
      password: this.state.password,
      workplace: this.state.workplace,
      presenterType: this.state.presenterType,
      sessionType: this.state.sessionType,
      jobRole: this.state.jobRole,
      researchArea: this.state.researchArea,
      country: this.state.country
    }

    axios.post('http://localhost:7000/presenter/create', presenter)
      .then((data) => {
        this.props.history.push('/dashboard')
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
        <h2>Presenter Registration</h2>
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
            <label className="form-label">Presenter Type</label>
            <select className="form-select" value={this.state.presenterType} onChange={this.handlePresenterChange}>
              <option value="Researcher">Researcher</option>
              <option value="Workshop Conductor">Workshop Conductor</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Session Type</label>
            <select className="form-select" value={this.state.sessionType} onChange={this.handleSessionChange}>
              <option value="Physical">Physical session</option>
              <option value="Virtual">Virtual session</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Job role</label>
            <input type="text" className="form-control" name="jobRole" onChange={this.onChange} value={this.state.jobRole} />
          </div>
          <div className="mb-3">
            <label className="form-label">Research Area</label>
            <input type="text" className="form-control" name="researchArea" onChange={this.onChange} value={this.state.researchArea} />
          </div>
          <div className="mb-3">
            <label className="form-label">Country</label>
            <input type="text" className="form-control" name="country" onChange={this.onChange} value={this.state.country} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <br /><br /><br /><br />
        </form>
      </div>
    )
  }
}

export default CreatePresenter;