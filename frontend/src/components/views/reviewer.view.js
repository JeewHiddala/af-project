import React, { Component} from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import CheckoutSteps from '../checkoutSteps/checkoutStepsAdmin';

class viewReviewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewers: []
        }
        this.deleteReviewer = this.deleteReviewer.bind(this);
        this.navigateCreateReviewerPage = this.navigateCreateReviewerPage.bind(this);
        this.back = this.back.bind(this);
    }

    componentDidMount() {   //inbuild function
        axios.get('http://localhost:7000/reviewer/')
            .then(response => {
                this.setState({ reviewers: response.data.data });
            })
    }

    navigateEditReviewerPage(e, reviewerId) {
        window.location = `/updateReviewer/${reviewerId}`
    }

    navigateCreateReviewerPage(e) {
        window.location = '/reviewerRegistration'
    }

    back(e) {
        window.location = '/adminSubcategories'
    }

    deleteReviewer(e , reviewerId) {
        console.log("I am on Delete", reviewerId)
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
                axios.delete(`http://localhost:7000/reviewer/${reviewerId}`)
                Swal.fire(
                    'Deleted!',
                    'Product has been deleted.',
                    'success'
                )
            }
        })
    }

    render() {
        return (
            <div>
                <CheckoutSteps step3></CheckoutSteps>
            <div className="container">
                <br/>
                <div className = "row">
                    <div className="col-8"><h1>Reviewers</h1></div>
                    <div className="col-2"><button type="button" className="btn btn-outline-primary" onClick={e => this.navigateCreateReviewerPage(e)}> <a href="/reviewerRegistration">Create Reviewer</a></button></div>
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
                                <th scope="col">Recruited Administrator/s Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Reviewer Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.reviewers.length > 0 && this.state.reviewers.map((item, index) => (
                                <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.nicNo}</td>
                                <td>{item.address}</td>
                                <td>{item.mobileNumber}</td>
                                <td>
                                {item.admins.map((item,index)=>(
                                    <p>{item.name}</p>
                                ))}
                                </td>
                                <td>{item.userName}</td>
                                <td>{item.reviewerSalary}</td>
                                <td><button type="button" className="btn btn-outline-warning"  onClick={e => this.navigateEditReviewerPage(e, item._id)} >Edit</button></td>
                                <td><button type="button" className="btn btn-outline-danger"  onClick={e => this.deleteReviewer(e, item._id)} >Delete</button></td>
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

export default viewReviewer;