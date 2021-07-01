import React, { Component } from 'react';
import axios from 'axios';

const initialState = {      //initiate states
    id: '',
    name: '',
    email: '',
    mobileNo: '',
    username: '',
    password: '',
    workplace: '',
    jobRole: '',
    type: '',
    country: '',
    emergencyContactNo: '',
    emergencyContactName: ''
}
class updateAttendee extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);  //bind onChange function.
        this.onSubmit = this.onSubmit.bind(this);   //bind onSubmit function.
        this.toDashboard = this.toDashboard.bind(this);
        this.state = initialState;      //apply states.
    }

    onChange(e) {     //update states when changed
        this.setState({ [e.target.name]: e.target.value })
    }

    toDashboard(e, userId) {
        this.props.history.push({
            pathname: '/attendee/dashboard',
            data: `${userId}`
        })
    }

    componentDidMount() {
        const attendee = this.props.match.params.id;
        console.log("obj: " + attendee);
        axios.get(`http://localhost:7000/attendee/${attendee}`)
            .then(response => {
                this.setState({ id: response.data.data._id })
                this.setState({ name: response.data.data.name })
                this.setState({ email: response.data.data.email })
                this.setState({ mobileNo: response.data.data.mobileNo })
                this.setState({ username: response.data.data.username })
                //this.setState({ password: response.data.data.password })
                this.setState({ workplace: response.data.data.workplace })
                this.setState({ jobRole: response.data.data.jobRole })
                this.setState({ type: response.data.data.type })
                this.setState({ country: response.data.data.country })
                this.setState({ emergencyContactNo: response.data.data.emergencyContactNo })
                this.setState({ emergencyContactName: response.data.data.emergencyContactName })

                console.log(response.data.data)
            })
            .catch(error => {
                alert(error.message)
            })

    }

    onSubmit(e) {      //submit details
        e.preventDefault();     //avoid browser refresh. Since if the browser refreshes, it will erase all typed info in form automatically.
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
        console.log('DATA TO SEND', attendee);
        axios.patch(`http://localhost:7000/attendee/update/${this.state.id}`, attendee)
            .then(response => {
                this.props.history.push({
                    pathname: '/attendee/dashboard',
                    data: response.data.data
                })
                console.log("resA" + response.data.data);
                alert('Attendee Data successfully updated')

            })
            .catch(error => {
                console.log(error.message);
                if (error.response.status === 500)
                    alert('Username is already taken')
                else if (error.response.status === 404)
                    alert('Error: Details not found')

            })
    }

    render() {    //use to return html when calling component.
        const { data } = this.props.location
        console.log("userid: " + data);
        if (data) {
            return (
                <div className="container">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button type="button" className="btn btn-primary me-md-2" onClick={e => this.toDashboard(e, data)} >Dashboard</button>
                    </div>                    
                    <h1>Update Profile</h1><br />
                    <form onSubmit={this.onSubmit}>
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
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                        <br /><br /><br /><br />
                    </form>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <h2>Please login to continue</h2>
                    <br /><br /><br /><br />
                    <button type="button" className="btn btn-primary" onClick={e => this.loadLogin(e)} >Login</button>
                    <br /><br /><br /><br />
                </div>
            )
        }

    }
}

export default updateAttendee;