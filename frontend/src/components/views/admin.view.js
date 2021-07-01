import React, { Component} from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import CheckoutSteps from '../checkoutSteps/checkoutStepsAdmin';

class viewAdmins extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admins: []
        }
        this.deleteAdmin = this.deleteAdmin.bind(this);
        this.navigateCreateAdminPage = this.navigateCreateAdminPage.bind(this);
        this.back = this.back.bind(this);
    }

    componentDidMount() {   //inbuild function
            this.fetchAdmin();
    }

    fetchAdmin(){
        axios.get('http://localhost:7000/admin/')
        .then(response => {
            this.setState({ admins: response.data.data });
        })

    }

    navigateEditAdminPage(e, adminId) {
        window.location = `/updateAdmin/${adminId}`
    }

    navigateCreateAdminPage(e) {
        window.location = '/adminRegistration'
    }

    back(e) {
        window.location = '/adminSubcategories'
    }

    deleteAdmin(e , adminId) {
        console.log("I am on Delete", adminId)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:7000/admin/${adminId}`)
                
                  console.log(this.state.admins);
                Swal.fire(
                    'Deleted!',
                    'Product has been deleted.',
                    'success'
                )
                
            }
            console.log("a");

        }),this.fetchAdmin();

    }

    render() {
        return (
            <div>
                <CheckoutSteps step1></CheckoutSteps>
            <div className="container">
                <br/>
                <div className = "row">
                    <div className="col-8"><h1>Administrators</h1></div>
                    <div className="col-2"><button type="button" className="btn btn-outline-primary" onClick={e => this.navigateCreateAdminPage(e)}> Create Administrator</button></div>
                    <div className="col-2"><button type="button" className="btn btn-outline-primary" onClick={e => this.back(e)}> back</button></div>
                </div>
                <br/>
                    <div className="container">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">NIC No</th>
                                <th scope="col">Address</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">Username</th>
                                <th scope="col">Admin Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.admins.length > 0 && this.state.admins.map((item, index) => (
                                <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.nicNo}</td>
                                <td>{item.address}</td>
                                <td>{item.mobileNumber}</td>
                                <td>{item.userName}</td>
                                <td>{item.salary}</td>
                                <td><button type="button" className="btn btn-outline-warning"  onClick={e => this.navigateEditAdminPage(e, item._id)} >Edit</button></td>
                                <td><button type="button" className="btn btn-outline-danger"  onClick={e => this.deleteAdmin(e, item._id)} >Delete</button></td>
                                </tr>
                            ))}    
                            </tbody>
                        </table>
                    </div>
            </div>
            </div>
        )
    }
}

export default viewAdmins;