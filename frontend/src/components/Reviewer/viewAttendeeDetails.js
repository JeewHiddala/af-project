import './editworkshopProposals.css';
import Swal from "sweetalert2";
import React, { Component} from 'react';
import axios from 'axios';

class AllAttendeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendee: []
    }
    
  }
  componentDidMount(){
   
    axios.get(`http://localhost:7000/attendee/${this.props.match.params.id}`)
    .then(response => {
      this.setState({attendee: response.data.data});
    })
    .then(() =>{
      console.log(this.state.attendee)
                this.setState({ name: this.state.attendee.name });
                this.setState({ email: this.state.attendee.email });
                this.setState({ mobileNo: this.state.attendee.mobileNo });
                this.setState({ username: this.state.attendee.username });
                this.setState({ password: this.state.attendee.password });
                this.setState({ workplace: this.state.attendee.workplace });
                this.setState({ jobRole: this.state.attendee.jobRole });
                this.setState({ type: this.state.attendee.type });
                this.setState({ country: this.state.attendee.country });
                this.setState({ emergencyContactNo: this.state.attendee.emergencyContactNo });
                this.setState({ emergencyContactName: this.state.attendee.emergencyContactName });

    });
  }


  render(){
    return (

        <div className="container">
            <div className={"card p-4"}>
            
                <h5 htmlFor="content"  className="form-label mb-4" style={{textAlign:"left"}}>
                    {}
                </h5>

                <form onSubmit={this.onSubmit} onChange={this.onHandle}>
                
                    <div className={"row"}>
                        <div className={"col-md-6"}>
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="name"  className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="email"  className="form-label">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="mobileNo"  className="form-label">Mobile Number</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="mobileNo"
                                    name="mobileNo"
                                    value={this.state.mobileNo}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="userName"  className="form-label">UserName</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="password"  className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="workplace"  className="form-label">Work Place</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="workplace"
                                    name="workplace"
                                    value={this.state.workplace}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="jobRole"  className="form-label">Job Role</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="jobRole"
                                    name="jobRole"
                                    value={this.state.jobRole}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="type"  className="form-label">Type</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="type"
                                    name="type"
                                    value={this.state.type}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="country"  className="form-label">Country</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="country"
                                    name="country"
                                    value={this.state.country}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="emergenctContactNo"  className="form-label">Emergency Contact Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="emergencyContactNo"
                                    name="emergencyContactNo"
                                    value={this.state.emergencyContactNo}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3" style={{textAlign:"left"}}>
                                <label htmlFor="emergencyContactName"  className="form-label">Emergency Contact Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="emergencyContactName"
                                    name="emergencyContactName"
                                    value={this.state.emergencyContactName}
                                    onChange={this.onChange}
                                />
                            </div>
                         </div>
                       </div>
                  <br></br>
              <br></br>
          </form>
       </div>
    </div>
    )
  }                         
}


export default AllAttendeeDetails;