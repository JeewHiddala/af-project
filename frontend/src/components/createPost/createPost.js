import Swal from "sweetalert2";
import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';
import './createPost.css'


const initialState = {
    options1: [],
    options2: [],
    options3: [],
    selectedEditors: [],
    selectedAdmins: '',
    posts: [],
    title: '',
    description: '',
    submittedDate: '',
    status: 'Pending',
    approvedDate: '',
    remarks: ''
}

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onEditorSelect = this.onEditorSelect.bind(this);
      //  this.onAdminSelect = this.onAdminSelect.bind(this);
        this.state = initialState;
    }

    componentDidMount() {
        axios.get('http://localhost:7000/editor/')
            .then(response => {
                this.setState({ editors: response.data.data }, () => {
                    let data = [];
                    this.state.editors.map((item, index) => {
                        let editors = {
                            value: item._id,
                            label: item.name
                        }
                        data.push(editors)
                        console.log("a" + editors);
                    });
                    this.setState({ options1: data });
                })
            })

       /* axios.get('http://localhost:7000/admin/')
            .then(response => {
                this.setState({ admins: response.data.data }, () => {
                    let data = [];
                    this.state.admins.map((item, index) => {
                        let admins = {
                            value: item._id,
                            label: item.name
                        }
                        data.push(admins)
                        console.log("a" + admins);
                    });
                    this.setState({ options2: data });
                })
            })*/

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onEditorSelect(e) {
        this.setState({ selectedEditors: e ? e.map(item => item.value) : [] });
    }


    /*onAdminSelect(e) {
        this.setState({ selectedAdmins: e ? e.map(item => item.value) : [] });
    }
*/

    onSubmit(e) {
        e.preventDefault();
      
        let post = {
            title: this.state.title,
            description: this.state.description,
            submittedDate: this.state.submittedDate,
            editors: this.state.selectedEditors,
            status: this.state.status,
            
            //admins: this.state.selectedAdmins,
            remarks: this.state.remarks
        };

        console.log('DATA TO SEND', post);
        axios.post('http://localhost:7000/post/create', post)
            .then(response => {
                alert('Data successfully inserted')
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })

        }

    render() {
        return (

            <div className="container"><br />
           
        <h2>Create Post</h2>
                    <h5 htmlFor="content" className="form-label mb-4" style={{ textAlign: "left" }}>
                      
                    </h5>

                    <form onSubmit={this.onSubmit} >

                        <div className={"row"}>
                            <div className={"col-md-6"}>


                                <div className="mb-3" style={{ textAlign: "left" }}>
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        name="title"
                                        value={this.state.title}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className="mb-3" style={{ textAlign: "left" }}>
                                    <label htmlFor="title" className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.onChange}
                                    >
                                    </textarea>

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="submittedDate" className="form-label">Submitted Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="submittedDate"
                                        name="submittedDate"
                                        value={this.state.submittedDate}
                                        onChange={this.onChange}

                                    />
                                </div>
                                <br/>

                                <Select
                                    placeholder="Select Editor"
                                    options={this.state.options1}
                                    onChange={this.onEditorSelect}
                                    className="basic-multi-select"
                                    isMulti
                                />
                                <br/>
                                <div className="mb-3">
                                    <label htmlFor="status" className="form-label">Status</label>
                                    <select className="mb-3" id="lang"
                                        disabled
                                        onChange={this.onChange}
                                        value={this.state.status}
                                        name="status"
                                        >
                                        <option value="Pending">Pending </option>
                                        <option value="Approved">Approved</option>
                                        <option value="Declined">Declined</option>
                                    </select>
                                </div>
                               
                                <div className="mb-3">
                                    <label htmlFor="approvedDate" className="form-label">Review Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="approvedDate"
                                        name="approvedDate"
                                        value={this.state.approvedDate}
                                        disabled
                                        onChange={this.onChange}
                                       
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="remarks" className="form-label">Remarks</label>
                                    <textarea
                                        className="form-control"
                                        id="remarks"
                                        name="remarks"
                                        value={this.state.remarks}
                                        disabled
                                        onChange={this.onChange}
                                    >
                                    </textarea>
                                </div>
                                <br></br>
                                <br></br>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                        <br>
                        </br>
                        <br></br>
                        <br></br>
                    </form>

               
            </div>
        )
    }
}


export default CreatePost;