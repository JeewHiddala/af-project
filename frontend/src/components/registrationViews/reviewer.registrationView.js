import React, { Component} from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import Select from 'react-select';    //import react select

const initialState = {      //initiate states
    name: '',
    email: '',
    nicNo: '',
    address: '',
    mobileNumber: 0,
    userName: '',
    password: '',
    reviewerSalary: 0,
    admins: [],
    options: [],
    selectedAdmins: []

}
class reviewerRegistration extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);  //bind onChange function.
        this.onSubmit = this.onSubmit.bind(this);   //bind onSubmit function.
        this.onAdminSelect = this.onAdminSelect.bind(this);
        this.back = this.back.bind(this);
        this.state = initialState;      //apply states.
    }

    componentDidMount() {
        axios.get('http://localhost:7000/admin/')       //get admins details to frontend from backend when component mount
            .then(response => {
                this.setState({ admins: response.data.data }, () => {
                    let data = [];
                    this.state.admins.map((item, index) => {        //map used to loop until array end.
                        let admins = {
                            value: item._id,
                            label: item.name
                        }
                        data.push(admins)
                    });
                    this.setState({ options: data });
                    console.log(data);
                })
            })
    }

    onChange(e) {     //update states
        this.setState({ [e.target.name]: e.target.value })
    }

    onAdminSelect(e) {    //push select admin array
        this.setState({ selectedAdmins: e ? e.map(item => item.value) : [] });
    }

    back(e) {
        window.location = '/reviewer'
    }

    onSubmit(e) {      //submit details
        e.preventDefault();     //avoid browser refresh. because if browser refresh, erase all typed info in form automatically.
        let reviewer = {
            name: this.state.name,
            email: this.state.email,
            nicNo: this.state.nicNo,
            address: this.state.address,
            mobileNumber: this.state.mobileNumber,
            userName: this.state.userName,
            password: this.state.password,
            reviewerSalary: this.state.reviewerSalary,
            admins: this.state.selectedAdmins
        }
        console.log('DATA TO SEND', reviewer);    
        axios.post('http://localhost:7000/reviewer/create', reviewer)
            .then(response => {
                // alert('reviewer Data successfully inserted')
                this.setState({ 
                    name: '',
                    email: '',
                    nicNo: '',
                    address: '',
                    mobileNumber: 0,
                    userName: '',
                    password: '',
                    reviewerSalary: 0,
                    admins: [],
                    options: [],
                    selectedAdmins: []
                 })
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'New Reviewer details has been saved',
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
                <h1>Create Reviewer</h1><br/>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Reviewer Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder = "Enter Reviewer name"
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
                        <div className="col-5">
                            <label htmlFor="nicNo" className="form-label">National Identity Card Number </label>
                            <input
                                type="text"
                                className="form-control"
                                id="nicNo"
                                name="nicNo"    //give state name
                                value={this.state.nicNo}      //bind state value
                                onChange={this.onChange}    //don't call function. only give a reference.
                            />
                        </div>
                        <div className="col-5">
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
                        <div className="col-2">
                        <label htmlFor="reviewerSalary" className="form-label">Salary</label>
                        <input
                            type="salary"
                            className="form-control"
                            id="reviewerSalary"
                            name="reviewerSalary"
                            value={this.state.reviewerSalary}
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
                    <div className="mb-3">
                    <label htmlFor="admin" className="form-label">Recruited Administrator/s Name</label>
                    <Select
                        options={this.state.options}
                        onChange={this.onAdminSelect}
                        className="basic-multi-select"
                        isMulti
                    />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-outline-success">Submit</button>
                    </div>
                </form>
                <div className="col-2"><button type="button" className="btn btn-outline-primary" onClick={e => this.back(e)}> Back</button></div>
            </div>
        )
    }
}

export default reviewerRegistration;