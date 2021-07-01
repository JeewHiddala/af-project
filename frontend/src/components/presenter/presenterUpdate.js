import React, { Component } from 'react';
import axios from 'axios';

const initialState = {      //initiate states
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
class updatePresenter extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);  //bind onChange function.
        this.onSubmit = this.onSubmit.bind(this);   //bind onSubmit function.
        this.state = initialState;      //apply states.
    }

    onChange(e) {     //update states when changed
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount() {
        const presenter = this.props.match.params.id;
        console.log("obj: " + presenter);
        axios.get(`http://localhost:7000/presenter/${presenter}`)
            .then(response => {
                this.setState({ id: response.data.data._id })
                this.setState({ name: response.data.data.name })
                this.setState({ email: response.data.data.email })
                this.setState({ mobileNo: response.data.data.mobileNo })
                this.setState({ username: response.data.data.username })
                //this.setState({ password: response.data.data.password })
                this.setState({ workplace: response.data.data.workplace })
                this.setState({ jobRole: response.data.data.jobRole })
                this.setState({ researchArea: response.data.data.researchArea })
                this.setState({ country: response.data.data.country })
                this.setState({ presenterType: response.data.data.presenterType })
                this.setState({ sessionType: response.data.data.sessionType })

                console.log(response.data.data)
            })
            .catch(error => {
                alert(error.message)
            })

    }

    onSubmit(e) {      //submit details
        e.preventDefault();     //avoid browser refresh. Since if the browser refreshes, it will erase all typed info in form automatically.
        let presenter = {
            name: this.state.name,
            email: this.state.email,
            mobileNo: this.state.mobileNo,
            username: this.state.username,
            password: this.state.password,
            workplace: this.state.workplace,
            jobRole: this.state.jobRole,
            researchArea: this.state.researchArea,
            country: this.state.country,
            presenterType: this.state.presenterType,
            sessionType: this.state.sessionType
        }
        console.log('DATA TO SEND', presenter);
        axios.patch(`http://localhost:7000/presenter/update/${this.state.id}`, presenter)
            .then(response => {
                this.props.history.push({
                    pathname: '/presenter/dashboard',
                    data: response.data.data
                })
                console.log("resP" + response.data.data);
                alert('Presenter Data successfully updated')

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
                    <br />
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

export default updatePresenter;