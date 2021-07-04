import React, { Component } from 'react';
//import axios from 'axios';


class PresenterDashboard extends Component {
    constructor(props) {
        super(props);
        this.loadUpdateProfile = this.loadUpdateProfile.bind(this);

    }

    loadUpdateProfile(e, userId) {
        this.props.history.push({
            pathname: `/presenter/${userId}`,
            data: `${userId}`
          })    }
    render() {
        const { data } = this.props.location
        console.log("userid: " + data);
        if (data) {
            return (
                <div className="container">
                    <h2>Presenter Dashboard</h2>
                    <br /><br /><br /><br />
                    <button type="button" className="btn btn-primary" onClick={e => this.loadUpdateProfile(e, data)} >Update Profile</button>
                    <br /><br /><br /><br />
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

export default PresenterDashboard;