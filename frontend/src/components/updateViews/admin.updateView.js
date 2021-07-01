import React, { Component} from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

const initialState = {      //initiate states
    id:'',
    name: '',
    email: '',
    nicNo: '',
    address: '',
    mobileNumber: 0,
    userName: '',
    password: '',
    salary: 0
}
class updateAdmin extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);  //bind onChange function.
        this.onSubmit = this.onSubmit.bind(this);   //bind onSubmit function.
        this.back = this.back.bind(this);
        this.state = initialState;      //apply states.
        // this.state = { disabled: true }
    }

    onChange(e) {     //update states
        this.setState({ [e.target.name]: e.target.value })
    }

    back(e) {
        window.location = '/admin'
    }

    componentDidMount() {
        // const admin = admins._id;
        const admin = this.props.match.params.id;
        console.log("rrrr"+admin);
      axios.get(`http://localhost:7000/admin/${admin}`)
           .then(response => {
               this.setState({id:response.data.data._id})
               this.setState({name:response.data.data.name})
               this.setState({email:response.data.data.email})
               this.setState({nicNo:response.data.data.nicNo})
               this.setState({address:response.data.data.address})
               this.setState({mobileNumber:response.data.data.mobileNumber})
               this.setState({userName:response.data.data.userName})
               this.setState({password:response.data.data.password})
               this.setState({salary:response.data.data.salary})

               console.log(response.data.data)
           })
           .catch(error => {
               alert(error.message)
           })

    }

    onSubmit(e) {      //submit details
        e.preventDefault();     //avoid browser refresh. because if browser refresh, erase all typed info in form automatically.
        let admin = {
            name: this.state.name,
            email: this.state.email,
            nicNo: this.state.nicNo,
            address: this.state.address,
            mobileNumber: this.state.mobileNumber,
            userName: this.state.userName,
            password: this.state.password,
            salary: this.state.salary
        }
        console.log('DATA TO SEND', admin);    
        axios.patch(`http://localhost:7000/admin/update/${this.state.id}`, admin)
            .then(response => {
                // alert('Admin Data successfully inserted')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Updated Admin details has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }

    render() {    //use to return things when call createSubject component.
        return (
            <div className="container">
                <br/>
                <h1>Edit Administrator</h1><br/>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Administrator Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder = "Enter administrator name"
                            id="name"
                            name="name"    //give state name
                            value={this.state.name}      //bind state value
                            onChange={this.onChange}    //don't call function. only give a reference.
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder = "Enter email"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input
                            type="address"
                            className="form-control"
                            placeholder = "Enter address"
                            id="address"
                            name="address"
                            value={this.state.address}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="nicNo" className="form-label">National Identity Card No</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nicNo"
                                name="nicNo"    //give state name
                                value={this.state.nicNo}      //bind state value
                                onChange={this.onChange}    //don't call function. only give a reference.
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                            <input
                                type="mobileNumber"
                                className="form-control"
                                id="mobileNumber"
                                name="mobileNumber"
                                value={this.state.mobileNumber}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="userName" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder = "Enter username"
                                id="userName"
                                name="userName"
                                value={this.state.userName}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder = "Enter password"
                                id="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="col-3 mb-3">
                        <label htmlFor="salary" className="form-label">Salary</label>
                        <input
                            type="salary"
                            className="form-control"
                            id="salary"
                            name="salary"
                            value={this.state.salary}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-outline-success">Update</button>
                        <button type="button" className="btn btn-outline-primary" onClick={e => this.back(e)}> Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default updateAdmin;