import React, { Component} from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import CheckoutSteps from '../checkoutSteps/checkoutStepsAdmin';

class viewEditors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editors: []
        }
        this.deleteEditor = this.deleteEditor.bind(this);
        this.navigateCreateEditorPage = this.navigateCreateEditorPage.bind(this);
        this.back = this.back.bind(this);
    }

    componentDidMount() {   //inbuild function
        axios.get('http://localhost:7000/editor/')
            .then(response => {
                this.setState({ editors: response.data.data });
            })
    }

    navigateEditEditorPage(e, editorId) {
        window.location = `/updateEditor/${editorId}`
    }

    navigateCreateEditorPage(e) {
        window.location = '/editorRegistration'
    }

    back(e) {
        window.location = '/adminSubcategories'
    }

    deleteEditor(e , editorId) {
        console.log("I am on Delete", editorId)
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
                axios.delete(`http://localhost:7000/editor/${editorId}`)
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
                <CheckoutSteps step2></CheckoutSteps>
            <div className="container">
                <br/>
                <div className = "row">
                    <div className="col-8"><h1>Editors</h1></div>
                    <div className="col-2"><button type="button" className="btn btn-outline-primary" onClick={e => this.navigateCreateEditorPage(e)}>Create Editor</button></div>
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
                                <th scope="col">Recruited Administrator Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Editor Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.editors.length > 0 && this.state.editors.map((item, index) => (
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
                                <td>{item.editorSalary}</td>
                                <td><button type="button" className="btn btn-outline-warning"  onClick={e => this.navigateEditEditorPage(e, item._id)} >Edit</button></td>
                                <td><button type="button" className="btn btn-outline-danger"  onClick={e => this.deleteEditor(e, item._id)} >Delete</button></td>
                                </tr>
                            ))}    
                            </tbody>
                        </table>
                        <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                    </div>
            </div>
            </div>
        )
    }
}

export default viewEditors;